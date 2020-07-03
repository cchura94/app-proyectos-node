const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario = require('./../models').Usuario;

function login(req, res) {
    Usuario.findOne({
        where: {
            email: req.body.email
        }
    }).then((user) => {
        if(!user){
            res.json({status: false, mensaje: "Error Usuario"})
            
        }else{
            if(!bcrypt.compareSync(req.body.password, user.password)){
                res.json({status: false, mensaje: "Error PASSOWORD"})
            }
        }
        console.log(user.email)
        const payload = {
            username: user.email,
            id: user.id,
            time: new Date()
        };
        var token = jwt.sign(payload, "MICODIGOSECRETO", {
            expiresIn: '6h'
        });          
        
        res.json({token: token, usuario: {email: user.email, time: new Date()}});
    })
}

module.exports = {
    login
}