import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "./ProductCard/ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart, shoppingCart}) {
    return (
        <div className="product-grid" id="buy">
            <div className="content">
                <h3>Products</h3>
                <div className="grid">
                    {
                        products.map((product, idx) => (
                            <ProductCard 
                            product = {product}
                            productId = {product.id}
                            quantity = {
                                shoppingCart.find(item => item.itemId === product.id) == undefined
                                ? 0
                                : shoppingCart.find(item => item.itemId === product.id).quantity
                            }
                            handleAddItemToCart = {handleAddItemToCart}
                            handleRemoveItemToCart = {handleRemoveItemToCart}
                            showDescription = {false}
                            key = {idx}
                            />
                          ))
                    }
                </div>
            </div>
        </div>
    )
  }