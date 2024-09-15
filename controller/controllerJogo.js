const jogos = require("../model/retroMongo.js");
const multer = require('multer');

exports.cria_get = async function (req, res) {
  contexto = {
    title: "Criação de Nova Anotação",
    titulo_pagina: "Criação de Anotação",
  };
  res.render("telaAdmin", contexto);
};

// Configuração do multer fora da função para evitar reconfiguração a cada requisição
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../public/images'); // Diretório onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + ".jpg"); // Salva o arquivo com nome único e extensão .jpg
  }
});

const upload = multer({ storage }).single('file'); // Aqui definimos que será um único arquivo

exports.cria_post = function (req, res) {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      console.log("Erro do multer:", err);
      return res.status(500).send("Erro no upload da imagem.");
    } else if (err) {
      console.log("Erro desconhecido:", err);
      return res.status(500).send("Erro no upload.");
    }

    try {
      var titulo = req.body.titulo;
      var descJogo = req.body.descJogo;
      var iframe = req.body.iframe;
      var tag = req.body.tag;
      var imagem = req.file ? req.file.filename : null;

      console.log("Dados recebidos:");
      console.log("Título:", titulo);
      console.log("Descrição:", descJogo);
      console.log("Iframe:", iframe);
      console.log("Tag:", tag);
      console.log("Imagem:", imagem);

      var jogo = {
        titulo: titulo,
        descJogo: descJogo,
        iframe: iframe,
        tag: tag,
        imagem: imagem
      };
      await jogos.cria(jogo);
      console.log("Jogo salvo no banco de dados!");
      res.redirect("/");
    } catch (error) {
      console.log("Erro ao salvar o jogo no banco de dados:", error);
      res.status(500).send("Erro ao salvar o jogo.");
    }
  });
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
  try {
    // Inicializando as variáveis das tags
    var tagPlaystation = false;
    var tagNintendo = false;
    var tagArcade = false;

    var cod = req.params.codJogo;
    var jogo = await jogos.consulta(cod);

    // Definindo a tag correta com base no jogo
    switch (jogo.tag) {
      case "Playstation":
        tagPlaystation = true;
        break;
      case "Nintendo":
        tagNintendo = true;
        break;
      case "Arcade":
        tagArcade = true;
        break;
    }

    // Montando o contexto para renderizar a página
    const contexto = {
      jogo: jogo,
      tagPlaystation: tagPlaystation,
      tagNintendo: tagNintendo,
      tagArcade: tagArcade
    };

    // Renderizando a página com os dados do jogo
    res.render("alteraJogo", contexto);
  } catch (error) {
    console.log("Erro ao buscar o jogo no banco de dados:", error);
    res.status(500).send("Erro ao buscar o jogo.");
  }
};

exports.altera_post = function (req, res) {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      console.log("Erro do multer:", err);
      return res.status(500).send("Erro no upload da imagem.");
    } else if (err) {
      console.log("Erro desconhecido:", err);
      return res.status(500).send("Erro no upload.");
    }

    try {
      var titulo = req.body.titulo;
      var descJogo = req.body.descJogo;
      var iframe = req.body.iframe;
      var tag = req.body.tag;
      var imagem = req.file ? req.file.filename : null;

      var jogo = {
        titulo: titulo,
        descJogo: descJogo,
        iframe: iframe,
        tag: tag,
        imagem: imagem
      };

      var cod = req.params.codJogo;
      console.log(cod);
      console.log(jogo);
      
      await jogos.atualiza(jogo, cod);
      console.log("Jogo atualizado no banco de dados!");
      res.redirect("/");
    } catch (error) {
      console.log("Erro ao atualizar o jogo no banco de dados:", error);
      res.status(500).send("Erro ao atualizar o jogo.");
    }
  });
};


exports.deleta = async function (req, res) {
  var codigo = req.params.codJogo;
  await jogos.deleta(codigo);
  res.redirect("/");
};



