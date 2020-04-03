const router = require('express').Router();
const { check, validationResults } = require('express-validator');
const moment = require('moment');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

router.get('/', async (req, res) => {
    const users = await User.getAll();
    res.json(users);
});

// /api/users/login
router.post('/login', (req, res) => {
    // Comprobar con la base de datos si el login es correcto
    console.log(req.body.username, req.body.password);

    const user = { id: 1, username: 'Mario', email: 'mario@gmail.com' }
    res.json({ message: 'Login correcto', token: createToken(user) })
});

// /api/users/register
router.get('/register', [
    check('email', 'El email tiene que ser ...').not().isEmpty().isEmail(),
    check('email', 'El username tiene que ser ...').not().isEmpty(),
], (req, res) => {
    res.send('Todo correcto REG');
});

const createToken = (user) => {
    const obj = {
        id: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.sign(obj, 'CLAVE-SUPERSECRETA');
}

module.exports = router;