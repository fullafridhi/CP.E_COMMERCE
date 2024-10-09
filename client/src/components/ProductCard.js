import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductPanier } from '../redux/slices/PanierSlice';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  
  return (
    <div className="product-card">
      <img width="90px" src={product.poster} alt="Product not found" />
      <h5>{product.name}</h5>
      <h4>{product.description}</h4>
      <p>{product.price} Dt</p>
      <button 
        className="add-to-cart-button" 
        onClick={() => { dispatch(addProductPanier(product)); }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
