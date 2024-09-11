var express = require('express');
var router = express.Router();


var controllerIndex = require('../controller/controllerIndex.js')

router.get('/', controllerIndex.tela_principal);
router.get('/jogos', controllerIndex.tela_jogos);
router.post("/",controllerIndex.tela_principal); 
router.get('/errorId/:id', controllerIndex.tela_errorID);

module.exports = router;

