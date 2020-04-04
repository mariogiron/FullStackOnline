const router = require('express').Router();

const middlewares = require('./middlewares');
const apiUsersRouter = require('./api/users');
const apiProductsRouter = require('./api/products');
const apiAlumnosRouter = require('./api/alumnos');

// http://localhost:3000/api/users/...
router.use('/users', apiUsersRouter);
// http://localhost:3000/api/products/...
router.use('/products', middlewares.checkToken, apiProductsRouter);
// http://localhost:3000/api/alumnos/...
router.use('/alumnos',
    middlewares.checkToken,
    middlewares.checkAdmin,
    apiAlumnosRouter);

module.exports = router;