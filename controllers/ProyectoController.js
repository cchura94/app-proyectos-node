var Proyecto = require("./../models/index").Proyecto
var Actividad = require("./../models").Actividad

//GET
function listar(req, res) {
    Proyecto.findAll().then((lista) => {
        //console.log(lista);
        res.render("admin/proyecto/listar", {proyectos: lista})
    });
}

//GET
function crear(req, res) {
    res.render("admin/proyecto/crear")
}

//POST GUARDAR
function guardar(req, res) {
    Proyecto.create(req.body).then(() => {
        res.redirect("/proyecto");
    })
}

//GET
function mostrar(req, res) {
    Proyecto.findOne({
        where: {
            id: req.params.id
        },
        include: [Actividad]

    }).then((dato) => {
        //console.log(dato);
        //res.json(dato);
        res.render("admin/proyecto/mostrar", {proyecto: dato})
    })
    //res.send(req.params.id)
}

//GET

function editar(req, res) {
    Proyecto.findOne({
        where: {
            id: req.params.id
        }
    }).then((dato) => {
        //console.log(dato);
        //res.json(dato);
        res.render("admin/proyecto/editar", {proyecto: dato})
    })
}

//PUT
function modificar(req, res) {
    res.send("Modificando")
}

//DELETE
function eliminar(req, res) {
    
}

function agregarActividad(req, res) {
    var idproyecto = req.params.id;
    
    Actividad.create({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        proyecto_id: idproyecto
    }).then(()=> {
        res.redirect("/proyecto/"+idproyecto);
    })
}

module.exports = {
    listar,
    crear,
    guardar,
    mostrar,
    editar,
    modificar,
    eliminar,
    agregarActividad

}