const connection = require('./db.model');

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetos
exports.FicticioNuevoModel = (nombre, foto, icono, descripcion, latitud, longitud) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ficticio (nombre, foto, icono, descripcion, latitud, longitud) VALUES (?,?,?,?,?,?);`, [nombre, foto, icono, descripcion, latitud, longitud])
            .then(result => resolve(result))
            .catch(error => reject("Error FicticioNuevoModel: " + error));
    });
};

// cRrud : READ --> Leer o ver todos los objetos
exports.FicticioVerModel = () => {
    return new Promise(async (resolve, reject) => {
        connection.query('SELECT * FROM Ficticio;')
            .then(result => resolve(result))
            .catch(error => reject("Error FicticioVerModel: " + error));
    });
};

// crRud : READ --> Leer o ver un objetos por su id
exports.FicticioVerIdModel = (ID) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await connection.query(`SELECT * FROM ficticio WHERE ID = ${ID};`);
            resolve(data);
        } catch (error) {
            reject("Error FicticioVerIdModel: " + error);
        };
    });
}
// crrUd : UPLOAD --> actualizar objetos por su id
exports.FicticioCambiarModel = (ID, nombre, foto, icono, descripcion, latitud, longitud) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE ficticio SET
            nombre =?,
            foto = ?,
            icono = ?,
            descripcion = ?,
            latitud = ?,
            longitud = ?
            WHERE ID = ${ID};`, [nombre, foto, icono, descripcion, latitud, longitud])
            .then(result => resolve(result))
            .catch(error => reject("Error FicticioCambiarModel: " + error));
    });
};

// crruD : DELETED ID --> borrar  un objetos por su id
exports.FicticioBorrarModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM ficticio WHERE ID=?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error FicticioBorrarModel: " + error));
    });
};