const anotacoes = require('../model/retroMongo.js');


exports.tela_principal = async function (req, res) {
  condescricao = {
   
  };

  res.render('index', condescricao);

}


exports.tela_jogos = async function (req, res) {
  condescricao = {
    
  }
  res.render('jogos', condescricao);
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
