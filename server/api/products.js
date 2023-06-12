const router = require('express').Router();
const {
    models: { Product },
} = require('../db');

router.get('/', async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.send(products);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id);
        res.send(product);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.send(product);
    } catch (err) {
        next(err);
    }
});

//only admin users can update products - NEED TO IMPLEMENT
//DELETE /api/products/:id
router.delete('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).send({ msg: 'Product not Found' });
        }
        const data = await Product.findByPk(req.params.id);
        await data.destroy();
        res.send(data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
