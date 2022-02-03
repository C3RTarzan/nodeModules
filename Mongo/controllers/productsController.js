const Product = require('../models/Product');

module.exports = class ProductController {
    static async showProducts(req, res){

        const products = await Product.getProduct();

        res.render('products/all', { products });
        
    }

    static create(req, res){
        res.render('products/create')
    }

    static createPost(req, res){
        const name = req.body.name;
        const price = req.body.price;
        const desc = req.body.desc;

        const product = new Product(name, price, desc)
        product.save();
        
        res.redirect('/products');

    }

    static async getProduct(req, res){

        const id = req.params.id;

        const product = await Product.getProductById(id);
        
        res.render('products/product', { product });
    }
    static async removeProduct(req, res){
        const id = req.params.id;
        
        await Product.removeProductById(id);
        
        res.redirect('/products');
    }
}