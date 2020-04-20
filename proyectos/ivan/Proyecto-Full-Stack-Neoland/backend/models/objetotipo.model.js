const connection = require('./db.model');

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetotipo
exports.ObjetoTipoNuevoModel = (tipo, icono) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO objetotipo (tipo, icono) VALUE(?, ?);`, [tipo, icono])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoTipoNuevoModel: " + error));
    });
};

// cRrud : READ --> Leer o ver todos los objetotipo
exports.ObjetoTipoVerModel = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objetotipo;`)
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoTipoVerModel: " + error));
    });
};

// crRud : READ --> Leer o ver un objetotipo por su id
exports.ObjetoTipoVerIdModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objetotipo WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoTipoVerIdModel: " + error));
    });
};

// crrUd : UPLOAD --> actualizar objetotipo por su id
exports.ObjetoTipoCambiarModel = (ID, tipo, icono) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE objetotipo SET
        tipo = ?,
        icono = ?
        WHERE ID=${ID};`, [tipo, icono])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoTipoCambiarModel: " + error));
    });
}

// crruD : DELETED ID --> borrar  un objetotipo por su id
exports.ObjetoTipoBorrarModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM objetotipo WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoTipoBorrarModel: " + error));
    });
};