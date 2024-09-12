const jogos = require('../model/retroMongo.js');


exports.tela_principal = async function (req, res) {

  var todosJogos = await jogos.lista();
  var playstation = false;
  var nintendo = false;
  var arcade = false;

  todosJogos.forEach((jogo) => {
    switch (jogo.tag) {
      case "Playstation":
          jogo.playstation = true;
          break;
      case "Nintendo":
          jogo.nintendo = true;
          break;
      case "Arcade":
          jogo.arcade = true;
          break;
    }});

  condescricao = {
    vjogos: todosJogos,
    playstation: playstation,
    arcade: arcade,
    nintendo: nintendo
  };
  res.render('index', condescricao);

}

exports.telaCriaUser = async function (req, res) {
  res.render("criaUsuario", contexto);
};

exports.telaCriaJogos = async function (req, res) {
  condescricao = {

  }
  res.render('telaAdmin', condescricao);
}

exports.tela_jogos = async function (req, res) {
  var codigo = req.params._id;
  var jogo = await jogos.consulta(codigo);
  var linkframe = jogo.iframe;

  condescricao = {
    titulo: jogo.titulo,
    linkframe: linkframe
  }
  res.render('jogar', condescricao);
}

exports.tela_errorID = async function (req, res) {
  var id = req.params.id;
  console.log(id)
  condescricao = {
    titulo_pagina: "Erro ao encontrar id",
    id: id,
  };
  res.render('errorId', condescricao);
};
