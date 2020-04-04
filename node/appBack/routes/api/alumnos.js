const router = require('express').Router();
const Alumno = require('../../models/alumno');
const Asignatura = require('../../models/asignatura');

router.get('/', async (req, res) => {
    // Recupero todos los alumnos
    try {
        const alumnos = await Alumno.getAll();
        for (let alumno of alumnos) {
            const asignaturas = await Asignatura.getByAlumno(alumno.id);
            alumno.asignaturas = asignaturas;
        }
        res.json(alumnos);
    } catch (err) {
        res.json({ err: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await Alumno.create(req.body);
        res.json(result);
    } catch (err) {
        res.json({ err: err.message });
    }
})

module.exports = router;