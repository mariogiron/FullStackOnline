const router = require('express').Router();

const middlewares = require('./middlewares');
const apiUsersRouter = require('./api/users');
const apiProductsRouter = require('./api/products');

// http://localhost:3000/api/users/...
router.use('/users', apiUsersRouter);
// http://localhost:3000/api/products/...
router.use('/products', middlewares.checkToken, apiProductsRouter);

module.exports = router;