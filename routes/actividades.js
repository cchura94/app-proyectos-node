var express = require('express');
var router = express.Router();

var actividadController = require('./../controllers/ActividadController')

router.get("/", actividadController.listar);
router.get("/crear", actividadController.crear);
router.post("/", actividadController.guardar);
router.get("/:id", actividadController.mostrar);
router.get("/:id/editar", actividadController.editar);
router.put("/:id", actividadController.modificar);
router.delete("/:id", actividadController.eliminar);

module.exports = router;