const router = require('express').Router();
const Product = require('../../models/product');

// GET http://localhost:3000/api/products/
router.get('/', (req, res) => {
    // Product.getAll().then(() => {

    // });
    res.send('Products GET');
});

// POST http://localhost:3000/api/products/
router.post('/', (req, res) => {
    console.log(req.usuarioId);
    res.send('Products POST');
});

module.exports = router;