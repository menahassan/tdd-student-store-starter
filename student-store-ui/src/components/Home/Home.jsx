import * as React from "react"
import "./Home.css"
import Hero from "./Hero/Hero"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import CategoryMenu from "./CategoryMenu/CategoryMenu"
import ProductGrid from "./ProductGrid/ProductGrid"

export default function Home({products, handleAddItemtoCart, handleRemoveItemToCart, handleClickCategory, category, handleSearch, shoppingCart}) {
  return (
    <div className="home">
      <Hero
      handleSearch={handleSearch}
      ></Hero>
      <CategoryMenu 
      handleClickCategory = {handleClickCategory}
      category = {category}
      />
     <ProductGrid 
      products = {products}
      handleAddItemToCart = {handleAddItemtoCart}
      handleRemoveItemToCart = {handleRemoveItemToCart}
      shoppingCart = {shoppingCart}
      />
     <About />
     <Contact />
     <Footer />
    </div> 
  )
}
