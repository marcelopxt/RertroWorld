const jogos = require("../model/retroMongo.js");

exports.cria_get = async function (req, res) {
  contexto = {
    title: "Criação de Nova Anotação",
    titulo_pagina: "Criação de Anotação",
  };
  res.render("telaAdmin", contexto);
};

exports.cria_post = async function (req, res) {
  var titulo = req.body.titulo;
  var descJogo = req.body.descJogo;
  var iframe = req.body.iframe;
  var tag = req.body.tag;

  var jogo = {
    "titulo" : titulo,
    "descJogo" : descJogo,
    "iframe" : iframe,
    "tag" : tag
  } 
  await jogos.cria(jogo);
  res.redirect("/");
};



exports.consulta = async function (req, res) {
  // try {
  //   var chave = req.params.id_nota;
  //   var jogo = await jogos.consulta(chave);
  //   var data = jogo.data.toLocaleDateString("pt-BR");
  //   contexto = {
  //     titulo_pagina: "Consulta a Anotação", 
  //     jogo: jogo,
  //     data: data,
  //   };
  //   res.render("consultajogo", contexto);
  // } catch (err) {
  //   res.redirect("/errorIdNaoEncontrado/" + chave);
  // }
};

exports.altera_get = async function (req, res) {
//   try {
//     var chave = req.params.id_nota;
//     var jogo = await jogos.consulta(chave);
//     var tagPessoal = false;
//     var tagTrabalho = false;
//     var tagCurso = false;
//     var tagLazer = false;

//     switch (jogo.tag) {
//       case "Pessoal":
//         tagPessoal = true;
//         break;
//       case "Trabalho":
//         tagTrabalho = true;
//         break;
//       case "Curso":
//         tagCurso = true;
//         break;
//       case "Lazer":
//         tagLazer = true;
//         break;
//     }
//     contexto = {
//       title: "Alteração de Anotações",
//       titulo_pagina: "Altera a Anotação",
//       jogo: jogo,
//       tagPessoal: tagPessoal,
//       tagTrabalho: tagTrabalho,
//       tagCurso: tagCurso,
//       tagLazer: tagLazer,
//     };
//     res.render("alterajogo", contexto);
//   } catch (err) {
//     res.redirect("/errorIdNaoEncontrado/" + chave);
//   }
};

exports.altera_post = async function (req, res) {
//   var jogo = req.body;
//   var chave = req.params.id_nota;
//   await jogos.atualiza(jogo, chave);
//   res.redirect("/");
};

exports.mudarTag = async function (req, res) {
//   var chave = req.params.id_nota;
//   console.log(chave)
//   var jogo = await jogos.consulta(chave);
//   var tagAtual = jogo.tag;
//   console.log(tagAtual)

//   if (tagAtual == "Pessoal") {
//     jogo.tag = "Trabalho";
//   } else if (tagAtual == "Trabalho") {
//     jogo.tag = "Curso";
//   } else if (tagAtual == "Curso") {
//     jogo.tag = "Lazer";
//   } else if (tagAtual == "Lazer") {
//     jogo.tag = "Pessoal";
//   }
//   await jogos.atualiza(jogo, chave);
//   console.log(jogo.tag)
//   res.redirect("/");
};

exports.deleta = async function (req, res) {
//   var chave = req.params.id_nota;
//   await jogos.deleta(chave);
//   res.redirect("/");
};



