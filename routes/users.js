var express = require('express');
var router = express.Router();
//var Usuario = require("./../models").User
var usuarioController = require('./../controllers/UsuarioController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Lista de Usuario');
});

/* GET cargar formulario de creacion */
router.get("/nuevo", usuarioController.formNuevoUsuario)


/* POST guardar nuevo usuario */
router.post('/registro', usuarioController.registro);

module.exports = router;
