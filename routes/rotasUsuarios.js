var express = require('express');
var router = express.Router();


var controllerUsuario = require('../controller/controllerUsuario.js')

console.log("chegou no rotasusuario")
router.get('/cria', controllerUsuario.criaUsuario_get);
router.post('/cria', controllerUsuario.criaUsuario_post);
router.post("/logarUsuario" ,controllerUsuario.logarUsuario); 



module.exports = router;