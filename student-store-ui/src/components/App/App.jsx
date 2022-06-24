import * as React from "react"
import { useState, useEffect } from "react"
import axios from "axios";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"


export default function App() {
  const [categoryStatus, setCategoryStatus] = useState("All Categories")
  function handleClickCategory(category){
    setCategoryStatus(category)
  }

  const [searchStatus, setSearchStatus] = useState("")
  function handleSearch(name){
    setSearchStatus(name)
  }

  const [products, setProductStatus] = useState([])
  const [isFetching, setIsFetchingStatus] = useState(false)
  const [errorStatus, setErrorStatus] = useState("")
  const [successStatus, setSuccessStatus] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  //each shopping cart object should have itemId and quantity
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState({"name": "", "email": ""})

  
  useEffect(async () => {
    const productsResult = await axios(
      'https://codepath-store-api.herokuapp.com/store',
    ).catch(function (error){
       setErrorStatus(error)
       setIsFetchingStatus(true)
    });
    setProductStatus(productsResult.data.products)
    setIsFetchingStatus(false)
  });

  function handleOnToggle(){
    setIsOpen(!isOpen)
  }

  var currentItems = products
  if(categoryStatus != "All Categories"){
    currentItems = currentItems.filter(
      item => (categoryStatus == item.category)
    )
  }

  if(searchStatus != ""){
    currentItems = currentItems.filter(
      item => (item.name.toLowerCase().includes(searchStatus.toLowerCase()))
    )
  }

  const handleAddItemToCart = (productId) => {
    const productExists = shoppingCart.find(
      (product) => product.itemId === productId
    )
    if(productExists == undefined){
      const newArray = [...shoppingCart, {itemId: productId, quantity: 1}]
      console.log(1)
      setShoppingCart(newArray)
    }
    else{
      const newCart = shoppingCart.map((product) =>{
        if(product.itemId == productId){
          console.log(product.quantity + 1)
          return{...product, quantity: product.quantity + 1}
        }
        return product;
      });
      setShoppingCart(newCart)
    }
    console.log("add item")
  }

  const handleRemoveItemToCart = (productId) => {
    const productExists = shoppingCart.find(
      (product) => product.itemId === productId
    )
    //if the product exists
    if(productExists != undefined){
      const newCart = shoppingCart.map((product) =>{
        if(product.itemId == productId){
          /*if(product.quantity == 1){
            return{};
          }*/
          return{...product, quantity: product.quantity - 1}
        }
        return product;
      });
      var filteredItems = newCart.filter(
        item => (item.quantity != 0)
      )
      setShoppingCart(filteredItems)
    }
    console.log("remove item")
  }

  const handleOnCheckoutFormChange = (name, value) => {
    var newCheckout = checkoutForm
    newCheckout[name] = value
    setCheckoutForm(newCheckout)
  }

  async function handleOnSubmitCheckoutForm(checkoutForm, shoppingCart){
    await axios.post(
      'https://codepath-store-api.herokuapp.com/store',{
        user: checkoutForm,
        shoppingCart: shoppingCart
      }
    ).catch((err) => {
      setErrorStatus(err.message)
      setSuccessStatus("")
    }).then( (value) =>{
      setSuccessStatus(value.data.purchase.receipt.lines.join(" "))
      setErrorStatus("")
    }
    )
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar 
          />
          <Sidebar 
          isOpen={isOpen}
          shoppingCart = {shoppingCart}
          products = {products}
          checkoutForm = {checkoutForm}
          handleOnCheckoutFormChange = {handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm = {handleOnSubmitCheckoutForm}
          handleOnToggle = {handleOnToggle}
          errorStatus = {errorStatus}
          successStatus = {successStatus}
          isFetching = {isFetching}
          />
          <Routes>
            <Route path="/" element=
            {<Home 
              products={currentItems}
              handleAddItemtoCart = {handleAddItemToCart}
              handleRemoveItemToCart = {handleRemoveItemToCart}
              handleClickCategory = {handleClickCategory}
              category = {categoryStatus}
              handleSearch = {handleSearch}
              shoppingCart = {shoppingCart}
              isFetching = {isFetching}
            />}
            />
            <Route path="/products/:productId" element=
            {<ProductDetail
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart = {handleRemoveItemToCart}
            shoppingCart = {shoppingCart}
            isFetching = {isFetching}
            />}
            />
        </Routes>
          
        </main>
      </BrowserRouter>
    </div>
  )
}
