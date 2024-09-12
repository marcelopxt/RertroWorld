var express = require('express');
var router = express.Router();


var controllerIndex = require('../controller/controllerIndex.js')

router.get('/', controllerIndex.tela_principal);
router.get('/jogos', controllerIndex.telaCriaJogos);
router.get('/jogar/:_id', controllerIndex.tela_jogos);
router.post("/",controllerIndex.tela_principal); 

router.get('/jogos/criaUsuario', controllerIndex.criaUsuario_get);
router.post('/jogos/criaUsuario', controllerIndex.criaUsuario_post);
router.get('/errorId/:id', controllerIndex.tela_errorID);

module.exports = router;

