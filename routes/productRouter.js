const express = require('express');
const router = express.Router();
const { validateProduct } = require('../middlewares/productValidator');
const productsManagers = require('../managers/productsManagers');

router.get('/', (req, res) => res.json(productsManagers.getProducts()));
router.get('/:pid', (req, res) => res.json(productsManagers.getProductById(parseInt(req.params.pid))));
router.post('/', validateProduct, (req, res) => res.json(productsManagers.addProduct(req.body)));
router.put('/:pid', (req, res) => res.json(productsManagers.updateProduct(parseInt(req.params.pid), req.body)));
router.delete('/:pid', (req, res) => {
    productsManagers.deleteProduct(parseInt(req.params.pid));
    res.status(204).send();
});

module.exports = router;