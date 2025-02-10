const express = require('express');
const router = express.Router();
const cartsManagers = require('../managers/cartsManagers');

router.post('/', (req, res) => res.json(cartsManagers.createCart()));
router.get('/:cid', (req, res) => res.json(cartsManagers.getCartById(parseInt(req.params.cid))));
router.post('/:cid/product/:pid', (req, res) => res.json(cartsManagers.addProductToCart(parseInt(req.params.cid), parseInt(req.params.pid))));

module.exports = router;