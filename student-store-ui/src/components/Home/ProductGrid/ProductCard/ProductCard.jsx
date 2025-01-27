import * as React from "react"
import {Link} from 'react-router-dom';
import "./ProductCard.css"

export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
    let description = null
    if(showDescription){
        description = <p className="product-description">{product.description}</p>
    }
    return (
        <div>
            {
                    showDescription
                    ?
                    <div className="large-product-card">
                    <div>
                        <Link className = "media" to={`/products/${productId}`}>
                            <img class = "large-product-img" src={product.image} alt={`${product.name} image`} />
                        </Link>
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{`$${product.price.toFixed(2)}`}</p>
                        <p className="product-quantity">{`Quantity: ${quantity}`}</p>
                        <div>
                            <button className="add button" onClick={() => handleAddItemToCart(productId)}>Add</button>
                            <button className="remove button" onClick={() => handleRemoveItemToCart(productId)}>Remove</button>
                        </div>
                        {description}
                    </div>
                    </div>
                    : 
                    <div className="product-card">
                    <div>
                        <Link className = "media" to={`/products/${productId}`}>
                            <img class = "product-img" src={product.image} alt={`${product.name} image`} />
                        </Link>
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{`$${product.price.toFixed(2)}`}</p>
                        <p className="product-quantity">{`Quantity: ${quantity}`}</p>
                        <div>
                            <button className="add button" onClick={() => handleAddItemToCart(productId)}>Add</button>
                            <button className="remove button" onClick={() => handleRemoveItemToCart(productId)}>Remove</button>
                        </div>
                        {description}
                    </div>
                    </div>
            }
         
        </div>
    )
  }