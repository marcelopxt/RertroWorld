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
    return await colecao.findOneAndDelete({  _id: new mongodb.ObjectId(codigo) });
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

  async metodoPesquisar(pesquisa) {
    await conexao_bd();
    const colecao = bd().collection("jogos");
    await colecao.createIndex({ titulo: "text" });
    var jogos = await colecao.find({ $text: { $search: pesquisa } }).toArray();
    return jogos
  }
}
module.exports  = new RetroMongo();