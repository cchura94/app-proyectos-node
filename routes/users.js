var express = require('express');
var router = express.Router();
//var Usuario = require("./../models").User
var usuarioController = require('./../controllers/UsuarioController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST guardar nuevo usuario */
/*router.get('/nuevo', function(req, res, next) {
  res.render('formulario');
})*/
router.post('/registro', usuarioController.registro);

module.exports = router;
