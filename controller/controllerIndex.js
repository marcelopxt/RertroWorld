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

exports.criaUsuario_get = async function (req, res) {
  contexto = {
    title: "Criação de Nova Anotação",
    titulo_pagina: "Criação de Anotação",
  };
  res.render("criaUsuario", contexto);
};

exports.criaUsuario_post = async function (req, res) {
  var usuario = req.body;
  await jogos.criaUsuario(usuario);
  res.redirect("/");
};


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

exports.telaCriaJogos = async function (req, res) {
  // var idJogo = req.params._id;
  // var jogo = await jogos.consulta(idJogo);

  condescricao = {
    // iframe : jogo.iframe
  }
  res.render('telaAdmin', condescricao);
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
