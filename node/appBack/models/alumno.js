const connection = require('./db');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from alumnos')
            .then(alumnos => {
                // Trabajo con el array
                resolve(alumnos)
            })
            .catch(err => reject(err));
    })
}

exports.create = ({ discapacidad, nombre, apellidos, edad, email, matricula, notamedia, sexo }) => {
    return new Promise((resolve, reject) => {

        let arrData = [discapacidad, nombre, apellidos, edad, email, new Date(), matricula, notamedia, sexo];

        connection.query('insert into alumnos (discapacidad, nombre, apellidos, edad, email, fecha_matricula, matricula, notamedia, sexo) values (?, ?, ?, ?, ?, ?, ?, ?, ?)', arrData)
            .then(result => resolve(result))
            .catch(err => reject(err));
    })
}

exports.getByEmail = (pEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            const alumnos = await connection.query('select * from alumnos where email = ?', [pEmail]);
            // Trabajo con el array
            resolve(alumnos);
        } catch (err) {
            reject(err);
        }
    });
}