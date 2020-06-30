var bcrypt = require('bcrypt')
var Usuario = require("./../models/index").Usuario
var passport = require("passport")

exports.login = (req, res) => {
    //var error1 = req.session.error;
    
    res.render("auth/login", {layout: 'sitio', error: req.flash("error")})
}


exports.ingresar = passport.authenticate("local", {
    successRedirect: '/proyecto',
    failureRedirect: '/ingresar',
    failureFlash: true,
    badRequestMessage: "Abmos campos son obligatorios"
})



function ingresar2(req, res) {

    Usuario.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if(!user){
            //res.send("Usuario no encontrado")
            //req.session.error = "Usuario no encontrado";
            req.flash('error', 'Usuario no encontrado')
            res.redirect("/ingresar");
            //res.render("auth/login", {error: "Usuario no encontrado", layout: "sitio"})
        }else{
            if(!bcrypt.compareSync(req.body.password, user.password)){
                //res.send("Contraseña Incorrecta")
                req.flash('error', 'Contraseña Incorrecta')
                res.redirect("/ingresar");
                //res.render("auth/login", {error: "Contraseña Incorrecta", layout: "sitio"})
            }
        }          
        
        res.send("Bienvenido")
        
    }).catch((error) => {
        //console.log("errrrorrr", error);
    })
        
}

/*
module.exports = {
    login,
    //ingresar
}*/
