const connection = require('./db');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        connection.query('select * from usuarios')
            .then(ususarios => resolve(usuarios))
            .catch(err => reject(err));
    });
};

exports.getByEmail = (pEmail) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from usuarios where email = ?', [pEmail])
            .then(usuarios => {
                if (usuarios.length === 1) {
                    resolve(usuarios[0]);
                } else {
                    resolve(null);
                }
            })
            .catch(err => reject(err));
    })
}

exports.create = ({ username, email, password }) => {
    return new Promise((resolve, reject) => {
        connection.query('insert into usuarios (username, email, password) values (?, ?, ?)', [username, email, password])
            .then(result => resolve(result))
            .catch(err => reject(err));
    });
}

exports.isAdmin = (pUserId) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from usuarios where id = ?', [pUserId])
            .then(users => {
                if (users.length === 1) {
                    if (users[0].role === 2) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
}