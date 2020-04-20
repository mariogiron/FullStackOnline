const connection = require('../models/db.model');

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo conversacion
exports.ConversacionNuevoModel = (emisor, receptor, asunto) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO conversacion (emisor, receptor, asunto) VALUE (?,?,?);`, [emisor, receptor, asunto])
            .then(result => resolve(result))
            .catch(error => reject("Error ConversacionVerModel: " + error));
    });
};

// cRrud : READ --> Leer o ver todos los conversacion
exports.ConversacionVerModel = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM conversacion;`)
            .then(result => resolve(result))
            .catch(error => reject("Error ConversacionVerModel: " + error));
    });
};

// crRud : READ --> Leer o ver un conversacion por su id
exports.ConversacionVerIdModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM conversacion WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ConversacionVerIdModel: " + error));
    });
}
// crrUd : UPLOAD --> actualizar conversacion por su id
exports.ConversacionCambiarModel = (ID, emisor, receptor, asunto) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE conversacion SET
            emisor = ?,
            receptor = ?,
            asunto = ?  
            WHERE ID = ${ID};`, [ID, emisor, receptor, asunto])
            .then(result => resolve(result))
            .catch(error => reject("Error ConversacionCambiarModel: " + error));
    });
}
// crruD : DELETED ID --> borrar  un conversacion por su id
exports.ConversacionBorrarModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM conversacion WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ConversacionBorrarModel: " + error));
    });
}

//Obtener datos anidados entre conversación y mensaje
exports.ConversacionMensajeModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM mensaje WHERE fk_conversacion = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ConversacionBorrarModel: " + error));
    });
};