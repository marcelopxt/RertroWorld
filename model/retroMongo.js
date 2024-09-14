const mongodb = require("mongodb");
const ClienteMongo = mongodb.MongoClient;
var cliente;

const conexao_bd = async () => {
  if (!cliente)
    cliente = await ClienteMongo.connect("mongodb://127.0.0.1:27017");
};

const bd = () => {
  return cliente.db("retro");
};

class RetroMongo {

  async close() {
    if (cliente) cliente.close();
    cliente = undefined;
  }

  async cria(jogo) {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    await colecao.insertOne(jogo);
  }

  async atualiza(jogo, codigo) {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    console.log("entrou no atualiza")
    console.log(jogo.titulo)

    if (jogo.imagem === null) {
      await colecao.updateOne(
        { _id: new mongodb.ObjectId(codigo)},
        {
          $set: {
            titulo: jogo.titulo,
            descJogo: jogo.descJogo,
            iframe: jogo.iframe,
            tag: jogo.tag
          },
        }
      );
    }else{
      await colecao.updateOne(
        { _id: new mongodb.ObjectId(codigo)},
        {
          $set: {
            titulo: jogo.titulo,
            descJogo: jogo.descJogo,
            iframe: jogo.iframe,
            tag: jogo.tag,
            imagem: jogo.imagem
          },
        }
      );
    }
console.log(jogo)
 
  }

  async consulta(codigo) {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    const jogo = await colecao.findOne({ _id: new mongodb.ObjectId(codigo) });
    return jogo;
  }

  async deleta(codigo) {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    const doc = await colecao.findOne({ _id: new mongodb.ObjectId(codigo) });
    if (!doc) {
    throw new Error( "Não existe um jogo com codigo: ${codigo}");
    } else {
      await colecao.findOneAndDelete({  _id: new mongodb.ObjectId(codigo) });
    }
  }
  
  async lista() {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    var jogos = await colecao.find({}).toArray();
    return jogos;
  }

  async filtroTag(tag) {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    var jogos = await colecao.find({tag: tag}).toArray();
    return jogos;
  }

  async qtdTag(tag) {
    // await conexao_bd();
    // const colecao = bd().collection("jogos");
    // var qtd = await colecao.count({});
    // if (tag !== "Todas") {
    //   qtd = await colecao.count({tag: tag});
    // }
    // return qtd;
  }



  
 
  async metodoPesquisar(pesquisa) {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    await colecao.createIndex({ titulo: "text" });
    var jogos = await colecao.find({ $text: { $search: pesquisa } }).toArray();
    return jogos
  }


  
  async criaUsuario(usuario) {
    await conexao_bd();
    const colecao = bd().collection("usuarios");
    await colecao.insertOne(usuario);
  }  

  async logar(usuario) {
    await conexao_bd();
    const colecao = bd().collection("usuarios");
    var result = false;
    var descResult;
    var emailUsuario = usuario.email;
    var senhaUsuario = usuario.senha;

    try {
        var verificacao = await colecao.find({ Email: emailUsuario, Senha: senhaUsuario }).toArray();
        if (verificacao.length > 0) {
            var usuarioEncontrado = verificacao[0];       
            if (usuarioEncontrado.Email == emailUsuario && usuarioEncontrado.Senha == senhaUsuario) {
                result = true;
                descResult = "Login bem-sucedido";
                console.log("Login bem-sucedido");
            } else {
                result = false
                descResult = "Email ou senha incorretos";
                console.log("Email ou senha incorretos");
            }
        } else {
            result = false
            descResult = "Usuário não encontrado";
            console.log("Usuário não encontrado");
        }
    } catch (erro) {
        result = false
        descResult = "Algo deu errado ao conferir credenciais!";
        console.log("Algo deu errado ao conferir credenciais: ", erro);
    }


   var retorno = {
      "result": result,
      "descricao": descResult
    }
    return retorno;
}

}

module.exports = new RetroMongo();  