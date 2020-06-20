var bcrypt = require('bcrypt')
var Usuario = require("./../models/index").Usuario

function login(req, res) {
    res.render("auth/login")
}

function ingresar(req, res) {

    Usuario.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if(!user){
            res.send("Usuario no encontrado")
        }
        if(!bcrypt.compareSync(req.body.password, user.password))
            res.send("Contraseña Incorrecta")
        
        res.send("Bienvenido")
        
    })
        
}

module.exports = {
    login,
    ingresar
}
