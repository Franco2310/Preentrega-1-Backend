const fs = require('fs');

const path = './data/products.json';

class ProductsManager {
    constructor() {
        this.products = this.loadProducts();
    }

    loadProducts() {
        if (fs.existsSync(path)) {
            const data = fs.readFileSync(path);
            return JSON.parse(data);
        }
        return [];
    }

    saveProducts() {
        fs.writeFileSync(path, JSON.stringify(this.products, null, 2));
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(p => p.id === id);
    }

    addProduct(product) {
        product.id = this.products.length + 1;
        this.products.push(product);
        this.saveProducts();
        return product;
    }

    updateProduct(id, updatedProduct) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            this.saveProducts();
            return this.products[index];
        }
        return null;
    }

    deleteProduct(id) {
        this.products = this.products.filter(p => p.id !== id);
        this.saveProducts();
    }
}

module.exports = new ProductsManager();