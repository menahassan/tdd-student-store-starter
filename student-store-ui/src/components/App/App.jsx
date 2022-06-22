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
  const [error, setErrorStatus] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  //each shopping cart object should have itemId and quantity
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState("")

  
  useEffect(async () => {
    const productsResult = await axios(
      'https://codepath-store-api.herokuapp.com/store',
    ).catch(function (error){
       setErrorStatus(error)
    });
    setProductStatus(productsResult.data.products)
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


  function handleAddItemToCart(productId){
    /*var inCart = false
    var newCart = shoppingCart
    for(var i = 0; i < newCart.length; i++){
      if(productId == newCart[i].itemId){
        inCart = true
        newCart[i].quantity += 1
      }
    }
    if(!inCart){
      var newItem;
      newItem.itemId = productId
      newItem.quantity = 1
      newCart.push(newItem)
    }
    setShoppingCart(newCart)*/
    console.log("add item")
  }

  function handleRemoveItemToCart(productId){
    /*var newCart;
    for(var i = 0; i < shoppingCart.length; i++){
      if(productId == shoppingCart[i].itemId){
        shoppingCart[i].quantity -= 1
        if(shoppingCart[i].quantity  != 0){
          newCart.push(shoppingCart[i])
        }
      }
    }
    setShoppingCart(newCart)*/
    console.log("remove item")
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar 
          />
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/" element=
            {<Home 
              products={currentItems}
              handleAddItemtoCart = {handleAddItemToCart}
              handleRemoveItemToCart = {handleRemoveItemToCart}
              handleClickCategory = {handleClickCategory}
              category = {categoryStatus}
              handleSearch = {handleSearch}
            />}
            />
            <Route path="/products/:productId" element=
            {<ProductDetail
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart = {handleRemoveItemToCart}
            />}
            />
        </Routes>
          
        </main>
      </BrowserRouter>
    </div>
  )
}
