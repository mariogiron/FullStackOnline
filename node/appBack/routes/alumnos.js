const router = require('express').Router();
const Alumno = require('../models/alumno');

router.get('/', async (req, res) => {
    try {
        const alumnos = await Alumno.getAll();
        res.render('alumnos/index', { students: alumnos, title: 'Listado de Alumnos' });
    } catch (err) {
        res.json(err);
    }
});

router.get('/new', (req, res) => {
    res.render('alumnos/formulario');
});

module.exports = router;