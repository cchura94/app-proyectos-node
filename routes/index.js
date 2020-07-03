var express = require('express');
var router = express.Router();
var authController = require("./../controllers/authController.js")
// COntrolador de api
var apiProductoController =require("./../controllers/apiProductoController")

var apiAuthController =require("./../controllers/apiAuthController")
var authMiddleware = require("./../middleware/authMidleware");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ingresar', authController.login);

router.post("/ingresar", authController.ingresar)


//API DE PRODUCTOS

router.get("/api/producto", authMiddleware.apiAuth, apiProductoController.listar);
router.post("/api/producto", authMiddleware.apiAuth, apiProductoController.guardar);
router.get("/api/producto/:id", authMiddleware.apiAuth,apiProductoController.mostrar);
router.put("/api/producto/:id", authMiddleware.apiAuth,apiProductoController.modificar);
router.delete("/api/producto/:id", authMiddleware.apiAuth,apiProductoController.eliminar);

//LOGIN JWT
router.post("/api/auth/login", apiAuthController.login);


module.exports = router;
