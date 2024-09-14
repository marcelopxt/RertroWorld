const usuarios = require("../model/retroMongo.js");

exports.logarUsuario = async function (req, res) {
    var usuario = {
      "email" : req.body.email,
      "senha" : req.body.senha
    }
    var resultado;

    var login =  await usuarios.logar(usuario);

    if ( login.result == true) {
       resultado = {
        "resultado": false,
        "descricao": login.descResult
      }
     req.flash('success_msg', ' Funcionou')
      res.redirect("/");
    }else{
         resultado = {
            "resultado": true,
            "descricao": login.descResult
        }
        req.flash('error_msg', "Login Nao deu certo!")
        res.redirect("/");
    }
  };

  exports.criaUsuario_get = async function (req, res) {
    contexto = {
      
    };
    res.render("criaUsuario", contexto);
  };
  
  exports.criaUsuario_post = async function (req, res) {
    var usuario = req.body;
    await usuarios.criaUsuario(usuario);
    res.redirect("/");
  };
