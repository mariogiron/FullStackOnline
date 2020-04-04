const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const middlewares = require('../middlewares');

const User = require('../../models/user');

router.get('/', async (req, res) => {
    const users = await User.getAll();
    res.json(users);
});

// /api/users/login
router.post('/login', async (req, res) => {
    // Comprobar con la base de datos si el login es correcto
    const user = await User.getByEmail(req.body.email);
    if (!user) {
        return res.json({ error: 'Nombre de usuario y/o contraseña incorrectos' });
    }

    // Compruebo si las password coinciden
    const iguales = bcrypt.compareSync(req.body.password, user.password);
    if (iguales) {
        res.json({ message: 'Login correcto', token: createToken(user) })
    } else {
        return res.json({ error: 'Nombre de usuario y/o contraseña incorrectos' });
    }
});

// /api/users/register
router.post('/register', [
    check('email', 'El email tiene que ser ...').not().isEmpty().isEmail(),
    check('username', 'El username tiene que ser ...').not().isEmpty(),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ error: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    try {
        const result = await User.create(req.body);
        res.json(result);
    } catch (err) {
        res.json({ err: err.message });
    }
});

router.get('/admin', middlewares.checkToken, async (req, res) => {
    console.log(req.usuarioId);
    User.isAdmin(req.usuarioId).then(admin => {
        console.log('/ADMIN', admin);
        res.json({ admin: admin });
    });

});

const createToken = (user) => {
    const obj = {
        id: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.sign(obj, process.env.SECRET_KEY);
}

module.exports = router;