var Proyecto = require("./../models/index").Proyecto

//GET
function listar(req, res) {
    Proyecto.findAll().then((lista) => {
        console.log(lista);
        res.render("admin/proyecto/listar", {proyectos: lista})
    });
}

//GET
function crear(req, res) {
    res.render("admin/proyecto/crear")
}

//POST
function guardar(req, res) {
    Proyecto.create(req.body).then(() => {
        res.redirect("/proyecto");
    })
}

//GET
function mostrar(req, res) {
    res.send(req.params.id)
}

//GET

function editar(req, res) {
    
}

//PUT
function modificar(req, res) {
    
}

//DELETE
function eliminar(req, res) {
    
}

module.exports = {
    listar,
    crear,
    guardar,
    mostrar,
    editar,
    modificar,
    eliminar

}