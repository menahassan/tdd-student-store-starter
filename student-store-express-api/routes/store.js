const express = require('express')
const router = express.Router()
const StoreModel = require('../models/store.js')

router.get('/', (req, res) => {
    const products = StoreModel.listAllProducts()
    res.send({"products" : products})
})

router.get('/:productId', (req, res) => {
    const {productId} = req.params
    const product = StoreModel.fetchProduct(productId)
    res.send({"product" : product})
})

router.post('/', (req, res) => {
    const shoppingCart = req.body.shoppingCart
    const user = req.body.user
    const purchase = StoreModel.createPurchase(shoppingCart, user)
    res.status(201).send({"purchase" : purchase})
})

module.exports = router;