const connection = require('./db.model');

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetos
exports.MensajeNuevoModel = (emisor, texto) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO mensaje (emisor, texto) VALUE (?,?);`, [emisor, texto])
            .then(result => resolve(result))
            .catch(error => reject("Error MensajeNuevoModel: " + error));
    });
};

// cRrud : READ --> Leer o ver todos los objetos
exports.MensajeVerModel = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM mensaje;`)
            .then(result => resolve(result))
            .catch(error => reject("Error MensajeVerModel: " + error));
    });
};

// crRud : READ --> Leer o ver un objetos por su id
exports.MensajeVerIdModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM mensaje WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error MensajeVerIdModel: " + error));
    });
}
// crrUd : UPLOAD --> actualizar objetos por su id
exports.MensajeCambiarModel = (ID, emisor, texto) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE mensaje SET
            emisor = ?,
            texto = ?
            WHERE ID = ${ID};`, [emisor, texto])
            .then(result => resolve(result))
            .catch(error => reject("Error MensajeCambiarModel: " + error));
    });
};
// crruD : DELETED ID --> borrar  un objetos por su id
exports.MensajeBorrarModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM mensaje WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error MensajeBorrarModel: " + error));
    });
};