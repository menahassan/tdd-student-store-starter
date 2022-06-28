const { storage } = require('../data/storage.js')
const { BadRequestError } = require('../utils/errors.js')

class Store {
    constructor(){
        this.super();
    }

    static listAllProducts(){
        return storage.get('products').value();
    }

    static fetchProduct(productId){
        const products = Store.listAllProducts()
        return products[productId - 1]
    }

    static createReceipt(name, email, shoppingCart){
        let receipt = []
        receipt.push(`Showing receipt for ${name} available at ${email}`)
        shoppingCart.forEach(item => {
            var product = this.fetchProduct(item.itemId)
            receipt.push(`
            ${item.quantity} total ${product.name} purchased at a cost of $${product.price.toFixed(2)}} for a total cost of ${(product.price * item.quantity).toFixed(2)}}
            `)
        })
        return receipt
    }

    static createPurchase(shoppingCart, userOrder){
        const currentDate = new Date()

        if(!shoppingCart || !userOrder){
            throw new BadRequestError()
        }

        const uniqueElements = new Set();

        var subtotal = 0

        for(var i = 0; i < shoppingCart.length; i++){
            if(!shoppingCart[i].hasOwnProperty('itemId') || !shoppingCart[i].hasOwnProperty('quantity')){
                throw new BadRequestError()
            }
            //duplicate item
            if(uniqueElements.has(shoppingCart[i].itemId)){
                throw new BadRequestError("duplicate item")
            }
            var price = Store.fetchProduct(shoppingCart[i].itemId)["price"]
            subtotal += price * shoppingCart[i].quantity
            uniqueElements.add(shoppingCart[i].itemId)
        }

        const total = (subtotal * 1.0875).toFixed(2)


        var purchases = storage.get('purchases').value()

        const purchase = {
            id: purchases.length,
            name: userOrder.name,
            email: userOrder.email,
            order: shoppingCart,
            total: total,
            createdAt: currentDate.toString(),
            receipt : Store.createReceipt(userOrder.name, userOrder.email, shoppingCart)
        }

        return storage.get('purchases').push(purchase).write();

    }
}

module.exports = Store