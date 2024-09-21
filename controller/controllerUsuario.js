const usuarios = require("../model/userMongo.js");

exports.logarUsuario = async function (req, res) {
  var dados = req.body;
  var retorno;
  if (await usuarios.logar(dados) == null) {
    retorno = {
      mensagem: "Usuario Não encontrado"
    }
  } else {
    retorno = {
      mensagem: "Usuario encontrado"
    }
  }
  res.json(retorno);
};

exports.criaUsuario_get = async function (req, res) {

  res.render("criaUsuario", contexto);
};

exports.criaUsuario_post = async function (req, res) {
  var usuario = req.body;
  await usuarios.criaUsuario(usuario);
  res.redirect("/");
};

//============================================================================================================== API =====================================================================================================================

exports.logarUsuarioApi = async function (req, res) {
  var dados = req.body;
  var retorno;
  if (await usuarios.logar(dados) == null) {
    retorno = {
      mensagem: "Usuario Não encontrado"
    }
  } else {
    retorno = {
      mensagem: "Usuario encontrado"
    }
  }
  res.json(retorno);
};

exports.criaUsuarioApi = async function (req, res) {
  var usuario = req.body;
  await usuarios.criaUsuario(usuario);
  var retorno = {
    mensagem: "Usuario criado com sucesso!"
  }
  res.json(retorno);
};

exports.deletaUsuarioApi = async function (req, res) {
  var codigo = req.params.id;
  if (await usuarios.deleta(codigo)) {
    var retorno = {
      mensagem: "Usuario deletado com sucesso!"
    }
  } else {
    var retorno = {
      mensagem: "Erro ao deletar usuario!"
    }
  }
  res.json(retorno);
};

exports.consultaUsuarioApi = async function (req,res){
  var codigo = req.params.id;
  var pessoa = await usuarios.consulta(codigo)
  res.json(pessoa)
}