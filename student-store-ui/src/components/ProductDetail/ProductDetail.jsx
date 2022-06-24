import * as React from "react"
import axios from "axios";
import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';
import "./ProductDetail.css"
import "./ProductView/ProductView"
import ProductView from "./ProductView/ProductView";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart, shoppingCart}) {

    const [loading, setLoading] = useState(true)
    const [found, setFound] = useState(true)

    const [product, setProduct] = useState("")
    let { productId } = useParams();

    useEffect(async () => { 
        const productResult = await axios(
          `https://codepath-store-api.herokuapp.com/store/${productId}`,
        ).catch(function (error){
           console.log("error: ", error)
           setFound(false)
        })
        setProduct(productResult.data.product)
        setLoading(false)
      });
    return (
        <div className="product-detail">
          {
            found
            ?
            <div>
              {
              loading
              ?
              <h1 className="loading">Loading...</h1>
              : 
              <ProductView 
              product={product}
              productId = {productId}
              quantity = {
                shoppingCart.find(item => item.itemId === productId) == undefined
                ? 0
                : shoppingCart.find(item => item.itemId === productId).quantity
              }
              handleAddItemToCart = {handleAddItemToCart}
              handleRemoveItemToCart = {handleRemoveItemToCart}
              shoppingCart = {shoppingCart}
              />
            }
            </div>
            : <NotFound />
          }
            
        </div>
    ) 
  }