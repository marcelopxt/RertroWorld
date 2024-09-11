const jogos = require("../model/retroMongo.js");
exports.cria_get = async function (req, res) {
  contexto = {
    title: "Criação de Nova Anotação",
    titulo_pagina: "Criação de Anotação",
  };
  res.render("telaAdmin");
};

exports.cria_post = async function (req, res) {
  var jogo = req.body;
  await jogos.cria(jogo);
  res.redirect("/");
};

exports.consulta = async function (req, res) {
//   try {
//     var chave = req.params.id_nota;
//     var anotacao = await anotacoes.consulta(chave);
//     var data = anotacao.data.toLocaleDateString("pt-BR");
//     contexto = {
//       titulo_pagina: "Consulta a Anotação", 
//       anotacao: anotacao,
//       data: data,
//     };
//     res.render("consultaAnotacao", contexto);
//   } catch (err) {
//     res.redirect("/errorIdNaoEncontrado/" + chave);
//   }
};

exports.altera_get = async function (req, res) {
//   try {
//     var chave = req.params.id_nota;
//     var anotacao = await anotacoes.consulta(chave);
//     var tagPessoal = false;
//     var tagTrabalho = false;
//     var tagCurso = false;
//     var tagLazer = false;

//     switch (anotacao.tag) {
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
//       anotacao: anotacao,
//       tagPessoal: tagPessoal,
//       tagTrabalho: tagTrabalho,
//       tagCurso: tagCurso,
//       tagLazer: tagLazer,
//     };
//     res.render("alteraAnotacao", contexto);
//   } catch (err) {
//     res.redirect("/errorIdNaoEncontrado/" + chave);
//   }
};

exports.altera_post = async function (req, res) {
//   var anotacao = req.body;
//   var chave = req.params.id_nota;
//   await anotacoes.atualiza(anotacao, chave);
//   res.redirect("/");
};

exports.mudarTag = async function (req, res) {
//   var chave = req.params.id_nota;
//   console.log(chave)
//   var anotacao = await anotacoes.consulta(chave);
//   var tagAtual = anotacao.tag;
//   console.log(tagAtual)

//   if (tagAtual == "Pessoal") {
//     anotacao.tag = "Trabalho";
//   } else if (tagAtual == "Trabalho") {
//     anotacao.tag = "Curso";
//   } else if (tagAtual == "Curso") {
//     anotacao.tag = "Lazer";
//   } else if (tagAtual == "Lazer") {
//     anotacao.tag = "Pessoal";
//   }
//   await anotacoes.atualiza(anotacao, chave);
//   console.log(anotacao.tag)
//   res.redirect("/");
};

exports.deleta = async function (req, res) {
//   var chave = req.params.id_nota;
//   await anotacoes.deleta(chave);
//   res.redirect("/");
};
