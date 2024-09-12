const mongodb = require("mongodb");
const ClienteMongo = mongodb.MongoClient;
var cliente;

const conexao_bd = async () => {
  if (!cliente)
    cliente = await ClienteMongo.connect("mongodb://127.0.0.1:27017");
};

const bd = () => {
  return cliente.db("jogos");
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

  async criaUsuario(usuario) {
    await conexao_bd();
    const colecao = bd().collection("usuarios");
    await colecao.insertOne(usuario);
  }  
  async atualiza(jogo, chave) {
    // await conexao_bd();
    // const colecao = bd().collection("jogos");
    // await colecao.updateOne(
    //   { _id: new mongodb.ObjectId(chave)},
    //   {
    //     $set: {
    //       titulo: jogo.titulo,
    //       descricao: jogo.descricao,
    //       tag: jogo.tag,
    //     },
    //   }
    // );
  }


  async consulta(codigo) {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    const jogo = await colecao.findOne({ _id: new mongodb.ObjectId(codigo) });
    return jogo;
  }

  async deleta(chave) {
    // await conexao_bd();
    // const colecao = bd().collection("jogos");
    // const doc = await colecao.findOne({ _id: new mongodb.ObjectId(chave) });
    // if (!doc) {
    // throw new Error( "Não existe um jogo com chave: ${chave}");
    // } else {
    //   await colecao.findOneAndDelete({  _id: new mongodb.ObjectId(chave) });
    // }
  }
  
  async lista() {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    var jogos = await colecao.find({}).toArray();
    return jogos;
  }

  async listaTag(tag) {
    // await conexao_bd();
    // const colecao = bd().collection("jogos");
    // var jogos = await colecao.find({tag: tag}).toArray();
    // return jogos;
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

  async logar(usuario) {
    await conexao_bd();
    const colecao = bd().collection("usuarios");
    var resultado = false;
    var emailUsuario = usuario.email;
    var senhaUsuario = usuario.senha;

    try {
        var verificacao = await colecao.find({ Email: emailUsuario, Senha: senhaUsu }).toArray();
        if (verificacao.length > 0) {
            var usuarioEncontrado = verificacao[0];       
            if (usuarioEncontrado.Email == emailUsuario && usuarioEncontrado.Senha == senhaUsuario) {
                resultado = true;
                console.log("Login bem-sucedido");
            } else {
                console.log("Email ou senha incorretos");
            }
        } else {
            console.log("Usuário não encontrado");
        }
    } catch (erro) {
        console.log("Algo deu errado ao conferir credenciais: ", erro);
    }
    return resultado;
}

}

module.exports = new RetroMongo();