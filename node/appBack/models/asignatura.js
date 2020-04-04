const connection = require('./db');

exports.getByAlumno = (pAlumnoId) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from tbi_alumnos_asignaturas tbi, asignaturas asig where tbi.fk_asignatura = asig.id and tbi.fk_alumno = ?', [pAlumnoId])
            .then(asignaturas => resolve(asignaturas))
            .catch(err => reject(err));
    });
}