const Usuario = require("./../models").Usuario

function registro(req, res) {

    var email = req.body.email;
    var consulta = Usuario.findOne({where: {email}}).then((existe =>{
        if(existe){
            res.json({msg: "usuario ya existe"})
        }
        
    }));
    console.log(consulta)
    
    var u = {
        email: req.body.email,
        password: req.body.password
    }

    Usuario.create(u)

    res.json({msg: "usuario Registrado"})
}

module.exports = {
    registro
}
