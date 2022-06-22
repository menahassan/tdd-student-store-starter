import * as React from "react"
import axios from "axios";
import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';
import "./ProductDetail.css"
import "./ProductView/ProductView"
import ProductView from "./ProductView/ProductView";

export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart}) {

    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState("")
    let { productId } = useParams();

    useEffect(async () => {
        const productResult = await axios(
          `https://codepath-store-api.herokuapp.com/store/${productId}`,
        ).catch(function (error){
           console.log("error: ", error)
           setLoading(true)
        })
        setProduct(productResult.data.product)
        setLoading(false)
      });

    return (
        <div className="product-detail">
            
            {
                    loading
                    ?
                    <h1 className="loading">Loading...</h1>
                    : 
                    <ProductView 
                    product={product}
                    productId = {productId}
                    quantity = {1}
                    handleAddItemToCart = {handleAddItemToCart}
                    handleRemoveItemToCart = {handleRemoveItemToCart}
                    />
            }
            
        </div>
    ) 
  }