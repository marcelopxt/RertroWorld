var express = require('express');
var router = express.Router();


var controllerUsuario = require('../controller/controllerUsuario.js')

router.post('/usuario/cria', controllerUsuario.criaUsuarioApi);
router.get('/usuario/consulta/:id', controllerUsuario.consultaUsuarioApi);
router.delete('/usuario/delete/:id', controllerUsuario.deletaUsuarioApi);
router.post("/usuario/logar",controllerUsuario.logarUsuarioApi); 



var controllerJogo = require('../controller/controllerJogo.js')

router.post('/jogo/cria', controllerJogo.criaApi); 
router.get('/jogo/consulta/:codJogo', controllerJogo.consultaApi);
router.put('/jogo/altera/:codJogo', controllerJogo.alteraApi);
router.delete('/jogo/deleta/:codJogo', controllerJogo.deletaApi);

module.exports = router;