//require('cors')
const jwt = require('jsonwebtoken');
const moment = require('moment');
const fs = require('fs');
const secret = require('../secret/secrets');


//Token por head
exports.checkToken = (req, res, next) => {
    // Compruebo si el token está presente en las cabeceras
    if (!req.headers['user-token']) {
        return res.json({ error: 'Debes incluir el token' });
    }

    // Compruebo si el token es correcto
    const userToken = req.headers['user-token'];
    let obj = {};
    try {
        obj = jwt.verify(userToken, secret.jwt_clave)
    } catch (err) {
        return res.json({ error: 'El token es incorrecto' })
    }

    // Compruebo si el token está caducado
    if (moment().unix() > obj.expiredAt) {
        return res.json({ error: 'El token está caducado' });
    }

    req.usuarioId = obj.id;
    fs.appendFileSync('./registro.log', `${moment().format('DD-MM-YYYY hh:mm.ss')} USER:${req.usuarioId} ${req.method} ${req.url}\n`)

    next();
}

exports.checkAdmin = async (req, res, next) => {

    const isAdmin = await User.isAdmin(req.usuarioId);

    if (isAdmin) {
        next();
    } else {
        res.json({ error: 'El usuario debe ser administrador' });
    }
}
//Token por body
/* exports.checkToken = (req, res, next) => {
    if (req.path !== "/login" && req.path !== "/usuario/nuevo") {
        if (req.cookies["cookie_lostthing"] !== undefined) {
            jwt.verify(
                req.cookies["cookie_lostthing"],
                secret.jwt_clave,
                (error, confirmacion) => {
                    if (error) {
                        res.status(401).send({ "error": "🙅 Token no válido" });
                    } else if (confirmacion) {
                        next();
                    } else {
                        res.status(401).send({ "error": "🙅 Token no válido" });
                    };
                });
        } else {
            res.statue(401).send({ "menssage": "🙅 No estas autentificado", "loginURL": "/login" });
        };
    } else {
        next();
    };
}; */