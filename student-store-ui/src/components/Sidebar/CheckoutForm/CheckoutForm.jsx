import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, errorStatus, successStatus}) {
  return (
    <section className="checkout-form">
      <p><b>Checkout Form</b></p>
      <input className = "checkout-input" type = "email" name = "email" placeholder = "student@codepath.org" value = {checkoutForm.email} onChange={(e) => handleOnCheckoutFormChange("email", e.target.value)}/>
      <input className = "checkout-input right" type = "text" name = "name" placeholder = "Student Name" value = {checkoutForm.name} onChange={(e) => handleOnCheckoutFormChange("name", e.target.value)}/>
      <button className="checkout-button" onClick = {() => handleOnSubmitCheckoutForm(checkoutForm, shoppingCart)}>Checkout</button>
      <p className="checkout-message">
       { 
       successStatus == ""
       ? errorStatus
       : successStatus
       }
      </p>
    </section>
  )
}