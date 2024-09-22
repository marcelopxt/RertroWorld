const jogos = require('../model/retroMongo.js');

exports.tela_principal = async function (req, res) {
  var admin;
  var adminId = '66f048d81d937fe385323634';
  var login;
  var nomeLogado = req.session.nome;
  if (req.session.logado == adminId) {
    login = true;
    admin = true
  } else if (req.session.logado) {
    login = true
    admin = false;
  } else {
    login = false
    admin = false
  }

  var deslogar = req.body.deslogar;
  if (deslogar == 'sair') {
    req.session.destroy()
    res.redirect('/')
  }


  var condicao_pesquisa = false;
  var pesquisa = req.body.pesquisa;
  var tag = req.body.tag;
  var jogosFiltrados = await jogos.filtroTag(tag)
  var todosJogos = await jogos.lista();
  var playstation = false;
  var nintendo = false;
  var arcade = false;

  if ((tag === undefined || tag === "Todos") && (pesquisa === undefined)) {
    retorno = todosJogos
  } else
    if ((pesquisa === undefined)) {
      retorno = jogosFiltrados;
    } else if (pesquisa !== undefined) {
      condicao_pesquisa = true;
      retorno = await jogos.metodoPesquisar(pesquisa);
    } else if (cancelarButton !== undefined) {
      condicao_pesquisa = false;
      retorno = todosJogos;
    }

    var jogosVisitante = await jogos.listav();


  if (tag === "Playstation") {
    playstation = true;
  } else if (tag === "Nintendo") {
    nintendo = true;
  } else if (tag === "Arcade") {
    arcade = true;
  }

  retorno.forEach((jogo) => {
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
    }
  });


  jogosVisitante.forEach((jogo) => {
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
    }
  });

  condescricao = {
    nomeLogado: nomeLogado,
    login: login,
    admin: admin,
    jogosVisitante: jogosVisitante,
    vjogos: retorno,
    playstation: playstation,
    condicao_pesquisa: condicao_pesquisa,
    pesquisa: pesquisa,
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
