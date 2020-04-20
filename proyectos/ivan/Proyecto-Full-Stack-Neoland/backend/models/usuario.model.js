const connection = require('./db.model');

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo usuario
exports.UsuarioNuevoModel = (alias, nombre, apellidos, edad, email, password, foto) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO usuario (alias, nombre, apellidos, edad, email, password, foto)
            VALUE (?,?,?,?,?,?,?);`, [alias, nombre, apellidos, edad, email, password, foto])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioNuevoModel: " + error));
    });
};

// cRrud : READ --> Leer o ver todos los usuarios
exports.UsuarioVerModel = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM usuario;`)
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioVerModel: " + error));
    });
};

// crRud : READ --> Leer o ver un usuarios por su id
exports.UsuarioVerIdModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM usuario WHERE ID = ${ID};`)
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioVerIdModel: " + error));
    });
};

// crrUd : UPLOAD --> actualizar usuario por su id
exports.UsuarioCambiarModel = (ID, alias, nombre, apellidos, edad, email, password, foto) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE usuario SET
            alias = ?,
            nombre =  ?,
            apellidos = ?,
            edad = ?,
            email = ?,
            password = ?,
            foto = ?
            WHERE ID = ${ID};`, [alias, nombre, apellidos, edad, email, password, foto])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioCambiarModel: " + error));
    });
};

// crruD : DELETED ID --> borrar  un usuarios por su id
exports.UsuarioBorrarModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE FROM usuario WHERE ID = ${ID};`)
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioBorrarModel: " + error));
    });
};

//Extras -------------------------------------------------------------------------------
//Incluir conversaciones realizadas
exports.UsuarioConversacionModel = (ID) => {
    return new Promise(async (resolve, reject) => {
        //conseguir las conversaciones y los mensajes realcionados
        const data = connection.query(`SELECT * FROM conversacion con WHERE con.fk_usuario = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioConversacionModel: " + error));
    });
};

exports.UsuarioConversacionEnvidaModel = (ID) => {
    return new Promise((resolve, reject) => {
        //conseguir las conversaciones y los mensajes realcionados
        connection.query(`SELECT * FROM conversacion con WHERE con.emisor = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioConversacionModel: " + error));
    });
};

exports.UsuarioConversacionMensajeModel = (ID) => {
    return new Promise((resolve, reject) => {
        //conseguir las conversaciones y los mensajes realcionados
        connection.query(`SELECT * FROM mensaje men WHERE men.fk_conversacion = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioConversacionMensajeModel: " + error));
    });
};

exports.UsuarioObjetoModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objeto obj WHERE obj.fk_usuario = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioObjetoModel: " + error));
    });
};

exports.UsuarioObjetoFamiliaModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objetofamilia WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioObjetoFamiliaModel: " + error));
    });
};

exports.UsuarioObjetoFamiliaTipoModel = (ID) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM objetotipo WHERE ID = ?;`, [ID])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioObjetoFamiliaTipoModel: " + error));
    });
};


exports.UsuarioMailModel = (email) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM usuario WHERE email = ?;`, [email])
            .then(usuario => {
                if (usuario.length === 1) {
                    resolve(usuario);
                } else {
                    resolve(null);
                }
            })
            .catch(error => reject("Error UsuarioLoginModel: " + error));
    });
};

exports.UsuarioLoginModel = (nombre, email) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM usuario WHERE nombre = ? AND email = ?;`, [nombre, email])
            .then(result => resolve(result))
            .catch(error => reject("Error UsuarioLoginModel: " + error));

    });
};