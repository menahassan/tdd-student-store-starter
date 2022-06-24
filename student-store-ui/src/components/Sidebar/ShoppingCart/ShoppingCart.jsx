import * as React from "react"
import { useState, useEffect } from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({isOpen, products, shoppingCart}) {
    const [subtotal, setSubtotal] = useState(0)

    const getProduct = (productId) => {
        const productExists = products.find(
          (product) => product.id=== productId
        )
        return productExists
      }

    
      useEffect(() => {
        var total = 0
        for(var i = 0; i < shoppingCart.length; i++){
            var price = getProduct(shoppingCart[i].itemId).price
            total += price * (shoppingCart[i].quantity)
        }
        setSubtotal(total)
      });

    return (
        <div className="shopping-cart">
            <p><b>Shopping Cart</b></p>
            {
                shoppingCart.length == 0
                ? <p className="notification">No items added to cart yet. Start shopping now!</p>
                : <div>
                    {
                        shoppingCart.map((item, idx) => (
                            <div className="cart-wrapper" key = {idx}>
                                <p className="cart-product-name cart-product-quantity">
                                {
                                    `${getProduct(item.itemId).name}: ${item.quantity}`
                                }
                                </p>
                            </div>
                            ))
                    }
                    <b><p className="subtotal">{`Subtotal: $${subtotal.toFixed(2)}`}</p></b>
                    <b><p className="total-price">{`Total Price (with Tax): $${(subtotal * 1.0875).toFixed(2)}`}</p></b>
                </div>
            }
        </div>
    ) 
  }