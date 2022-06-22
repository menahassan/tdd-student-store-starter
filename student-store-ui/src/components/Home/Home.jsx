import * as React from "react"
import "./Home.css"
import Hero from "./Hero/Hero"
import About from "./About/About"
import Contact from "./Contact/Contact"
import ProductGrid from "./ProductGrid/ProductGrid"

export default function Home({products, handleAddItemtoCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <Hero></Hero>
     <ProductGrid 
      products = {products}
      handleAddItemToCart = {handleAddItemtoCart}
      handleRemoveItemToCart = {handleRemoveItemToCart}
      />
     <About />
     <Contact />
    </div> 
  )
}
