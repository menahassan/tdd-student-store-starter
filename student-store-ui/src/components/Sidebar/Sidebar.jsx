import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "./ShoppingCart/ShoppingCart"
import CheckoutForm from "./CheckoutForm/CheckoutForm"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, errorStatus, successStatus}) {
  return (
    <section className= {
      isOpen
      ? "sidebar open"
      : "sidebar closed"
      }>
      <div className="wrapper">
        <button className={
        isOpen
        ? "toggle-button open"
        : "toggle-button closed"
        } onClick={handleOnToggle}>{
          isOpen
          ? "X"
          : "See Cart"
        }</button>
        {
          isOpen
          ? <ShoppingCart 
          isOpen={isOpen}
          products = {products}
          shoppingCart = {shoppingCart}
          />
          : null
        }
        {
          isOpen && shoppingCart.length != 0
          ? <CheckoutForm 
          isOpen = {isOpen}
          shoppingCart = {shoppingCart}
          checkoutForm = {checkoutForm}
          handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}
          errorStatus = {errorStatus}
          successStatus = {successStatus}
          />
          : null
        }
      </div>
    </section>
  )
}
