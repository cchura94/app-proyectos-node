
var Producto = require("./../models/mongoModelos").Producto

function listar(req, res) {
    Producto.find().then((datos) => {
        res.json(datos);
    })
}

function guardar(req, res) {
    const p = new Producto(req.body);
    p.save().then(() => {
        res.json({status: true, mensaje: "Producto registrado"})
    }).catch(err => {
        console.log(err);
    })
}

function mostrar(req, res) {
    
}

function modificar(req, res) {
    
}


function eliminar(req, res) {
    
}

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}