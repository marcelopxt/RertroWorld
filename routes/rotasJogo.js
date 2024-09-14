var express = require('express');
var router = express.Router();
var controllerJogo = require('../controller/controllerJogo.js')

console.log("chegou no rotas jogo")

router.get('/cria', controllerJogo.cria_get);

router.post('/cria', controllerJogo.cria_post); 

router.get('/consulta/:codJogo', controllerJogo.consulta);

router.get('/altera/:codJogo', controllerJogo.altera_get);

router.post('/altera/:codJogo', controllerJogo.altera_post);

router.get('/deleta/:codJogo', controllerJogo.deleta);

module.exports = router;
