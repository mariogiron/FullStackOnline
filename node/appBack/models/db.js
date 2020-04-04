//Conexión con la bbdd
const mysql = require('mysql');
const mysql_config = require('../config/secretos')

//WRAPPER
class Database {
    constructor(config) {
        this.connection = mysql.createPool(config)
    }
    query(sql, data) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, data, (error, result) => {
                if (error) {
                    return reject(error)
                } else {
                    resolve(result)
                }
            });
        });
    }
}

//la config debe estar en un archivo a parte (por temas de seguridad)
const connection = new Database(mysql_config)

module.exports = connection;
