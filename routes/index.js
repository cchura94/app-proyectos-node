var express = require('express');
var router = express.Router();
var authController = require("./../controllers/authController.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ingresar', authController.login);

router.post("/ingresar", authController.ingresar)

module.exports = router;
