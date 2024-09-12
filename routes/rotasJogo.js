var express = require('express');
var router = express.Router();
var controllerJogo = require('../controller/controllerJogo.js')

console.log("chegou no rotas jogo")
router.get('/cria', controllerJogo.cria_get);
router.post('/cria', controllerJogo.cria_post);

router.get('/consulta/:id_nota', controllerJogo.consulta);

router.get('/altera/:id_nota', controllerJogo.altera_get);

router.post('/altera/:id_nota', controllerJogo.altera_post);

router.get('/deleta/:id_nota', controllerJogo.deleta);

router.get("/alteratag/:id_nota", controllerJogo.mudarTag); 

module.exports = router;
