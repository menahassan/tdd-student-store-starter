import * as React from "react"
import "./ProductGrid.css"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
    return (
        <div className="product-grid">
            <div className="content">
                <h3>Products</h3>
                <div className="grid">
                    
                </div>
            </div>
        </div>
    )
  }