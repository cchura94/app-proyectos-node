const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;

var bcrypt = require('bcrypt')
var Usuario = require("./../models/index").Usuario

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},(email, password, next) => {

    Usuario.findOne({
        where: {
            email: email
        }
    }).then((user) => {
        if(!user){
            //res.send("Usuario no encontrado")
            //req.session.error = "Usuario no encontrado";
            //req.flash('error', 'Usuario no encontrado')
            //res.redirect("/ingresar");
            return next(null, false, {message: "Usuario no encontrado"})
            //res.render("auth/login", {error: "Usuario no encontrado", layout: "sitio"})
        }else{
            if(!bcrypt.compareSync(password, user.password)){
                //res.send("Contraseña Incorrecta")
                //req.flash('error', 'Contraseña Incorrecta')
                //res.redirect("/ingresar");
                return next(null, false, {message: "Contraseña Incorrecta"})
            
                //res.render("auth/login", {error: "Contraseña Incorrecta", layout: "sitio"})
            }
        }          
        
        //res.send("Bienvenido")
        return next(null, user);
        
    })

}))

passport.serializeUser(function(usuario, cb){
    cb(null, usuario)
})
    


passport.deserializeUser(function(usuario, cb){
    cb(null, usuario)
})

module.exports = passport
