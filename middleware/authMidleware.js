exports.usuarioAutenticado = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/ingresar")
}

const jwt = require('jsonwebtoken');

exports.apiAuth = (req, res, next) => {
    var token = req.headers['token'];
    if (!token)
        return res.status(403).send({ auth: false, mensaje: 'No se proporciono token.' });
    
    jwt.verify(token, "MICODIGOSECRETO", (err, decoded) => {
        if (err)
            return res.status(500).send({ auth: false, mensaje: 'Error al autenticar el token.' });
        
        req.user = {
            username: decoded.username,
            id: decoded.id
        };
    next();
    });
}