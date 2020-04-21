let formValues = {
    nombre: 'Mario',
    apellidos: 'Girón',
    email: 'mario@mario.com',
    password: '12345',
    password_repite: '12345'
};

exports.createUser = ({ nombre, apellidos, email, password }) => {

}

createUser(formValues);

exports.filtrar = ({ nombre = null, concello = null, fecha = null, artista = null, clasificacion = null }) => {
    return new Promise((resolve, reject) => {
        let sql = 'select * from eventos where 1=1 ';
        if (nombre != null) {
            sql += ` AND nombre = ${nombre} `
        }
        if (concello != null) {
            sql += ` AND fk_concello = ${concello} `
        }

        const result = await connection.query(sql);

    });
}


EventoModel.filtrar({
    concello: 23
})




{
    nombre: 'Los bereberechos',
}