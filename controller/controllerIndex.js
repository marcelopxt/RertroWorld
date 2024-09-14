const jogos = require('../model/retroMongo.js');


exports.tela_principal = async function (req, res) {

  var condicao_pesquisa = false;
  var pesquisa = req.body.pesquisa;
  var tag = req.body.tag;
  var jogosFiltrados = await jogos.filtroTag(tag)
  var todosJogos = await jogos.lista();
  var playstation = false;
  var nintendo = false;
  var arcade = false;
  console.log(tag)
  console.log(pesquisa)

  if ((tag === undefined || tag === "Todos") && (pesquisa === undefined)) {
    retorno = todosJogos
    console.log("entrou no primeiro if")
  } else 
  if ((pesquisa === undefined)) {
    retorno = jogosFiltrados;
    console.log("entrou no segundo if")
  } else if (pesquisa !== undefined) {
    condicao_pesquisa = true;
    retorno = await jogos.metodoPesquisar(pesquisa);
    console.log("entrou no terceiro if")
    } else if (cancelarButton !== undefined){
      condicao_pesquisa = false;
      retorno = todosJogos;
      console.log("entrou no ultimo if")
  }
  
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
    }});

  condescricao = {
    vjogos: retorno,
    playstation: playstation,
    condicao_pesquisa :  condicao_pesquisa,
    pesquisa: pesquisa,
    arcade: arcade,
    nintendo: nintendo
  };

  console.log(condescricao)
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
