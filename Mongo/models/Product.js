const conn = require('../db/conn')

const { ObjectId } = require('mongodb');

class Product {
    constructor(name, price, desc){
        this.name = name;
        this.price = price;
        this.desc = desc;
    }
    save(){
        const product = conn.db().collection('products').insertOne({
            name: this.name,
            price: this.price,
            description: this.desc
        });
        return product;
    }

    static getProduct(){
        const product = conn.db().collection('products').find().toArray();

        return product;
    }

    static async getProductById(id){
        const product = await conn
            .db()
            .collection('products')
            .findOne({ _id: ObjectId(id) });

        return product;
    }  

    static async removeProductById(id){
        await conn
            .db()
            .collection('products')
            .deleteOne({ _id: ObjectId(id) });
        return
    }

}

module.exports = Product;
