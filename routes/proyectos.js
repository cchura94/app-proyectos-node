var express = require('express');
var router = express.Router();

var proyectoController = require("./../controllers/ProyectoController"); 
var authMiddleware = require("./../middleware/authMidleware");

//LISTAR
router.get("/", authMiddleware.usuarioAutenticado,proyectoController.listar);
// CARGAR UN FORMULARIO
router.get("/crear", authMiddleware.usuarioAutenticado, proyectoController.crear);
// GUARDAR DATOS 
router.post("/", authMiddleware.usuarioAutenticado, proyectoController.guardar);
//MOSTRAR UN PROYECTO
router.get("/:id", authMiddleware.usuarioAutenticado, proyectoController.mostrar);
// CARGAR UN FORMULARIO DE EDICION con datos llenados
router.get("/:id/editar", authMiddleware.usuarioAutenticado,proyectoController.editar);
// MODIFICAR LOS DATOS
//router.put("/:id", authMiddleware.usuarioAutenticado, proyectoController.modificar);
router.post("/:id", authMiddleware.usuarioAutenticado, proyectoController.modificar);

// ELIMINAR
//router.delete("/:id", authMiddleware.usuarioAutenticado, proyectoController.eliminar);
router.post("/eliminar/:id", authMiddleware.usuarioAutenticado, proyectoController.eliminar);

//AGREGAR NUEVA ACTIVIDAD A UN PROYECTO
router.post("/:id/nueva-actividad", proyectoController.agregarActividad);

//PRUEBAS API AXIOS
router.delete("/:id", authMiddleware.usuarioAutenticado, proyectoController.eliminar2);


module.exports = router;
