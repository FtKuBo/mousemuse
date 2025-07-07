
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000); // Animation duration
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={isAdding} className={isAdding ? 'adding-to-cart' : ''}>
        {isAdding ? 'Added!' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
