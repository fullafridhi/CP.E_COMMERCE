
import './ProductPanierCrd.css'; 
const ProductPanierCard = ({product }) => {
 

  return (
    <div className="card">
      <img src={product.poster} alt="Product not found" />
      <div className="info">
        <p className="description">{product.description}</p>
        <p className="price">Price: {product.price} Dt</p>
       
    
        </div>
    </div>
  )
}

export default ProductPanierCard
