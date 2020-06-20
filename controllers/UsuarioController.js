var bcrypt = require('bcrypt')
const Usuario = require("./../models").Usuario

function formNuevoUsuario(req, res) {
    res.render("admin/usuario/nuevo")
}


function registro(req, res) {
      
    var u = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)) 
    }

    Usuario.create(u)
    .then(() => {
        res.json({msg: "usuario Registrado Correctamente"})
    }).catch((error) => {
        console.log(error.errors.map(error => error.message));
        res.render("admin/usuario/nuevo", {
            error: error.errors.map(error => error.message)
        })
    })

    
}

module.exports = {
    registro,
    formNuevoUsuario
}
