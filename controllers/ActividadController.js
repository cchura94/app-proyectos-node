var Actividad = require("./../models/index").Actividad

//GET
function listar(req, res) {
    Actividad.findAll().then((lista) => {
        //console.log(lista);
        res.render("admin/actividad/listar", {actividades: lista})
    });
}

//GET
function crear(req, res) {
    res.render("admin/actividad/crear")
}

//POST GUARDAR
function guardar(req, res) {
    Actividad.create(req.body).then(() => {
        res.redirect("/actividad");
    })
}

//GET
function mostrar(req, res) {
    Actividad.findOne({
        where: {
            id: req.params.id
        }
    }).then((dato) => {
        //console.log(dato);
        //res.json(dato);
        res.render("admin/actividad/mostrar", {actividad: dato})
    })
    //res.send(req.params.id)
}

//GET

function editar(req, res) {
    Actividad.findOne({
        where: {
            id: req.params.id
        }
    }).then((dato) => {
        //console.log(dato);
        //res.json(dato);
        res.render("admin/actividad/editar", {actividad: dato})
    })
}

//PUT
function modificar(req, res) {
    res.send("Modificando")
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
