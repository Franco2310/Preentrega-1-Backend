const validateCart = (req, res, next) => {
    const { products } = req.body;
    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'El formato del carrito es incorrecto' });
    }
    next();
};

module.exports = { validateCart };
