const connection = require('../models/db.model');

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetoFamilia
exports.ObjetoFamiliaNuevoModel = (familia, color) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO objetofamilia(familia, color) VALUE(?,?);`, [familia, color])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoFamiliaNuevoModel: " + error));
    });
};

// cRrud : READ --> Leer o ver todos los objetoFamilia
exports.ObjetoFamiliaVerModel = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objetofamilia;`)
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoFamiliaVerModel: " + error));
    });
};

// crRud : READ --> Leer o ver un objetoFamilia por su id
exports.ObjetoFamiliaVerIdModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objetofamilia WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoFamiliaVerIdModel: " + error));
    });
}

// crrUd : UPLOAD --> actualizar objetoFamilia por su id
exports.ObjetoFamiliaCambiarModel = (ID, familia, color) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE objetofamilia SET
        familia= ?,
        color= ?
        WHERE ID = "${ID}";`, [familia, color])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoFamiliaCambiarModel: " + error));
    });
};

// crruD : DELETED ID --> borrar  un objetoFamilia por su id
exports.ObjetoFamiliaBorrarModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM objetofamilia WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoFamiliaBorrarModel: " + error));
    });
};
//Extras -------------------------------------------
//Relacion entre objeto tipo y objeto familia
exports.ObjetoFamiliaTipoModel = (ID) => {
    return new Promise((resolve, reject) => {
        const data = connection.query(`SELECT * from objetotipo WHERE fk_objetofamilia = ?`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error ObjetoFamiliaTipoModel: " + error));
    })
}