var express = require('express');
var router = express.Router();

var proyectoController = require("./../controllers/ProyectoController"); 

//LISTAR
router.get("/", proyectoController.listar);
// CARGAR UN FORMULARIO
router.get("/crear", proyectoController.crear);
// GUARDAR DATOS 
router.post("/", proyectoController.guardar);
//MOSTRAR UN PROYECTO
router.get("/:id", proyectoController.mostrar);
// CARGAR UN FORMULARIO DE EDICION con datos llenados
router.get("/:id/editar", proyectoController.editar);
// MODIFICAR LOS DATOS
router.put("/:id", proyectoController.modificar);
// ELIMINAR
router.delete("/:id", proyectoController.eliminar);

//AGREGAR NUEVA ACTIVIDAD A UN PROYECTO
router.post("/:id/nueva-actividad", proyectoController.agregarActividad);


module.exports = router;
