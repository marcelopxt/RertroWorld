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

class UserMongo {
async criaUsuario(usuario) {
    await conexao_bd();
    const colecao = bd().collection("usuarios");
    await colecao.insertOne(usuario);
  }  

  async logar(dados) {
    console.log('chegou no logar')
    console.log(dados)
    await conexao_bd();
    const colecao = bd().collection("usuarios");
    return await colecao.findOne({email: dados.email, senha: dados.senha})
}

async consulta(id) {
  await conexao_bd();
  const colecao = bd().collection("usuarios");
 return  await colecao.findOne({_id : new mongodb.ObjectId(id)})
}

async deleta(codigo) {
    await conexao_bd();
    const colecao = bd().collection("usuarios");
    const doc = await colecao.findOne({ _id: new mongodb.ObjectId(codigo) });
    if (!doc) {
    return false
    } else {
      await colecao.findOneAndDelete({  _id: new mongodb.ObjectId(codigo) });
      return true
    }
  }
}
module.exports = new UserMongo();  