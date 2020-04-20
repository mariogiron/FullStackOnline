const connection = require('./db.model');

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetos
exports.AlarmaNuevoModel = (foto, titulo, texto) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO alarma (foto, titulo, texto) VALUES (?,?,?);`, [foto, titulo, texto])
            .then(result => resolve(result))
            .catch(error => reject("Error AlarmaNuevoModel: " + error));
    });
};

// cRrud : READ --> Leer o ver todos los objetos
exports.AlarmaVerModel = () => {
    return new Promise(async (resolve, reject) => {
        connection.query('SELECT * FROM alarma;')
            .then(result => resolve(result))
            .catch(error => reject("Error AlarmaVerModel: " + error));
    });
};

// crRud : READ --> Leer o ver un objetos por su id
exports.AlarmaVerIdModel = (ID) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await connection.query(`SELECT * FROM alarma WHERE ID = ${ID};`);
            resolve(data);
        } catch (error) {
            reject("Error AlarmaVerIdModel: " + error);
        };
    });
}
// crrUd : UPLOAD --> actualizar objetos por su id
exports.AlarmaCambiarModel = (ID, foto, titulo, texto) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE alarma SET
            foto = ?,
            titulo = ?,
            texto = ?
            WHERE ID = ${ID};`, [foto, titulo, texto])
            .then(result => resolve(result))
            .catch(error => reject("Error AlarmaCambiarModel: " + error));
    });
};

// crruD : DELETED ID --> borrar  un objetos por su id
exports.AlarmaBorrarModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM alarma WHERE ID=?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error AlarmaBorrarModel: " + error));
    });
};