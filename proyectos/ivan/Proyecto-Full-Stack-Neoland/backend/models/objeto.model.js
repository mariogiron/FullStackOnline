const connection = require('./db.model');

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetos
exports.ObjetoNuevoModel = (nombre, foto, descripcion, perdido, encontrado, fecha_perdida, latitud_perdida, longitud_perdida, fecha_encontrado, latitud_encontrado, longitud_encontrado) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO objeto (nombre, foto, descripcion, perdido, encontrado, fecha_perdida, latitud_perdida, longitud_perdida, fecha_encontrado, latitud_encontrado, longitud_encontrado) VALUE (?,?,?,?,?,?,?,?,?,?,?);`, [nombre, foto, descripcion, perdido, encontrado, fecha_perdida, latitud_perdida, longitud_perdida, fecha_encontrado, latitud_encontrado, longitud_encontrado])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoNuevoModel: " + error));
    });
};
// cRrud : READ --> Leer o ver todos los objetos
exports.ObjetoVerModel = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objeto`)
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoVerModel: " + error));
    });
};

// crRud : READ --> Leer o ver un objetos por su id
exports.ObjetoVerIdModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objeto WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoVerIdModel: " + error));
    });
};

// crrUd : UPLOAD --> actualizar objetos por su id
exports.ObjetoCambiarModel = (ID, nombre, foto, descripcion, perdido, encontrado, fecha_perdida, latitud_perdida, longitud_perdida, fecha_encontrado, latitud_encontrado, longitud_encontrado) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE objeto SET
            nombre = ?,
            foto = ?,
            descripcion = ?,
            perdido = ?,
            encontrado = ?,
            fecha_perdida = ?,
            latitud_perdida = ?,
            longitud_perdida = ?,
            fecha_encontrado = ?,
            latitud_encontrado = ?,
            longitud_encontrado = ?
            WHERE ID= ${ID};`, [nombre, foto, descripcion, perdido, encontrado, fecha_perdida, latitud_perdida, longitud_perdida, fecha_encontrado, latitud_encontrado, longitud_encontrado])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoCambiarModel: " + error));
    });
};
// crruD : DELETED ID --> borrar  un objetos por su id

exports.ObjetoBorrarModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM objeto WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoBorrarModel: " + error));
    });
};
//Extras --------------------------------------------------------
//obtener el objeto con sus características
exports.ObjetoTipoModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objetotipo WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoCompletoModel: " + error));
    });


}