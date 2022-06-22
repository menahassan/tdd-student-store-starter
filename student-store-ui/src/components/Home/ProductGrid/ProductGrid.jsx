import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "./ProductCard/ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
    return (
        <div className="product-grid">
            <div className="content">
                <h3>Products</h3>
                <div className="grid">
                    {
                        products.map((product, idx) => (
                            <ProductCard 
                            product = {product}
                            productId = {product.id}
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