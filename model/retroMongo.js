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


  async consulta(chave) {
//     await conexao_bd();
//     const colecao = bd().collection("jogos");
//     const jogo = await colecao.findOne({ _id: new mongodb.ObjectId(chave) });
//     return jogo;
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
    // await conexao_bd();
    // const colecao = bd().collection("jogos");
    // var jogos = await colecao.find({}).toArray();
    // return jogos;
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

}


module.exports = new RetroMongo();