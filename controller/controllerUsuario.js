const usuarios = require("../model/userMongo.js");

exports.logarUsuario = async function (req, res) {
  var admin;
  var dados = {
    email: req.body.email,
    senha: req.body.senha
  }
  console.log(dados)
  var user = await usuarios.logar(dados);
  if (user == null) {
    admin = false
  } else {
    req.session.logado = user._id;
    req.session.nome = user.nome;
  }
  var retorno = {
    admin: admin
  }
    console.log(retorno)
  res.redirect('/')
};

exports.criaUsuario_get = async function (req, res) {
  res.render("criaUsuario");
};

exports.criaUsuario_post = async function (req, res) {
  var usuario = req.body;
  await usuarios.criaUsuario(usuario);
  res.redirect("/");
};

//============================================================================================================== API =====================================================================================================================

exports.logarUsuarioApi = async function (req, res) {
  var admin;
  var dados = {
    email: req.body.email,
    senha: req.body.senha
  }
  console.log(dados)
  var user = await usuarios.logar(dados);
  if (user == null) {
    admin = false
  } else {
    req.session.logado = user._id;
  }
  var retorno = {
    admin: admin
  }
  res.json(retorno)
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