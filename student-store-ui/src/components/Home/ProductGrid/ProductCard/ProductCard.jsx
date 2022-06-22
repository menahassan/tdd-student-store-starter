import * as React from "react"
import {Link} from 'react-router-dom';
import "./ProductCard.css"

export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription}) {
    let description = null
    if(showDescription){
        description = <p className="product-description">{product.description}</p>
    }
    return (
        <div className="product-card">
            <Link className = "media" to="/">
                <img class = "product-img" src={product.image} alt={`${product.name} image`} />
            </Link>
            <p className="name">{product.name}</p>
            <p className="price">{`$${product.price.toFixed(2)}`}</p>
            {description}         
        </div>
    )
  }