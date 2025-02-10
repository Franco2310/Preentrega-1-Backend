const fs = require('fs');

const cartPath = './data/carts.json';


class CartsManager {
    constructor() {
        this.carts = this.loadCarts();
    }

    loadCarts() {
        if (fs.existsSync(cartPath)) {
            const data = fs.readFileSync(cartPath);
            return JSON.parse(data);
        }
        return [];
    }

    saveCarts() {
        fs.writeFileSync(cartPath, JSON.stringify(this.carts, null, 2));
    }

    createCart() {
        const newCart = { id: this.carts.length + 1, products: [] };
        this.carts.push(newCart);
        this.saveCarts();
        return newCart;
    }

    getCartById(id) {
        return this.carts.find(c => c.id === id);
    }

    addProductToCart(cid, pid) {
        const cart = this.getCartById(cid);
        if (!cart) return null;

        const productIndex = cart.products.findIndex(p => p.product === pid);
        if (productIndex !== -1) {
            cart.products[productIndex].quantity++;
        } else {
            cart.products.push({ product: pid, quantity: 1 });
        }

        this.saveCarts();
        return cart;
    }
}

module.exports = new CartsManager();