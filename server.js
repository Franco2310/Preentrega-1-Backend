// server.js
const express = require('express');
const app = express();
const port = 8080;

// Middleware JSON
app.use(express.json());

// Importar middlewares correctamente
const { errorHandler } = require('./middlewares/index'); 
const { validateProduct } = require('./middlewares/productValidator');
const { validateCart } = require('./middlewares/validateCart'); 

// Importar routers
const productsRouter = require('./routes/productRouter'); 
const cartsRouter = require('./routes/cartRouter');

// Configurar rutas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
