
import React from 'react';

const Cart = ({ nextStep }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Cart items will be listed here */}
      <button onClick={nextStep}>Proceed to Shipping</button>
    </div>
  );
};

export default Cart;
