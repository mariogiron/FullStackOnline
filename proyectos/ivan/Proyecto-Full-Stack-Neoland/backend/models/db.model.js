
//! Sirve para gesionar la conexión con la base de datos.
//libreria para manejar bd de mysql.
const mysql = require('mysql');
const secrets = require('../secret/secrets');

//wrapper para pasar de callback a promesa, el npm mysql trabaja con callbacks
class Database {
    constructor(config) {
        //Usamos CreatePool, para hacer varias conexiones
        this.connection = mysql.createPool(config);
    };
    //usamos un query para abrir conexiones
    query(sql, data) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, data, (error, result) => {
                if (error) {
                    //console.log(error);
                    return reject(error);
                } else {
                    resolve(result);
                };
            });
        });
    };
    //para cerrar conexiones
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end((error) => {
                if (error) {
                    return reject(error);
                } else {
                    resolve();
                };
            });
        });
    };
}
//se pasa la confuración de la bd
const connection = new Database(secrets);

// ! EXPORTAR LA CONEXION A LA BASE DE DATOS
module.exports = connection;