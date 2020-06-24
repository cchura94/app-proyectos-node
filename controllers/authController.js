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
            //res.send("Usuario no encontrado")
            //res.redirect("/ingresar");
            res.render("auth/login", {error: "Usuario no encontrado"})
        }else{
            if(!bcrypt.compareSync(req.body.password, user.password)){
                //res.send("Contraseña Incorrecta")
                res.render("auth/login", {error: "Contraseña Incorrecta"})
            }
        }          
        
        res.send("Bienvenido")
        
    }).catch((error) => {
        //console.log("errrrorrr", error);
    })
        
}

module.exports = {
    login,
    ingresar
}
