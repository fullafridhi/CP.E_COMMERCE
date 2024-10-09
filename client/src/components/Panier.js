import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductPanierCard from './ProductPanierCard'
import { CreateOrder } from '../redux/slices/OrderSlice'
import './Panier.css'

const Panier = () => {
  const dispatch =useDispatch()
    const {products}= useSelector(state=>state.panier)
    
  return (
    <div className="panier-container">
  <h2 className="panier-title">Your Cart</h2>
  <div className="product-list">
     
     {
       products.map((el)=> <ProductPanierCard product={el}/>) 
    }
    </div>
     <button onClick={() => dispatch(CreateOrder({ProductList: products}))}>
        Add all Order
      </button>
    </div>
  ) 
}


export default Panier
 