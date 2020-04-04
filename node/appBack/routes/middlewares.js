const jwt = require('jsonwebtoken');
const moment = require('moment');
const User = require('../models/user');
const fs = require('fs');

exports.checkToken = (req, res, next) => {
    // Compruebo si el token está presente en las cabeceras
    if (!req.headers['user-token']) {
        return res.json({ error: 'Debes incluir el token' });
    }

    // Compruebo si el token es correcto
    const userToken = req.headers['user-token'];
    let obj = {};
    try {
        obj = jwt.verify(userToken, process.env.SECRET_KEY)
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