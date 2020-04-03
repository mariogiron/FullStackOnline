const jwt = require('jsonwebtoken');
const moment = require('moment');

exports.checkToken = (req, res, next) => {
    // Compruebo si el token está presente en las cabeceras
    if (!req.headers['user-token']) {
        return res.json({ error: 'Debes incluir el token' });
    }

    // Compruebo si el token es correcto
    const userToken = req.headers['user-token'];
    let obj = {};
    try {
        obj = jwt.verify(userToken, 'CLAVE-SUPERSECRETA')
    } catch (err) {
        return res.json({ error: 'El token es incorrecto' })
    }

    // Compruebo si el token está caducado
    if (moment().unix() > obj.expiredAt) {
        return res.json({ error: 'El token está caducado' });
    }

    req.usuarioId = obj.id;

    next();
}