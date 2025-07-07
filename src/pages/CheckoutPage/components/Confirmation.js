
import React, { useEffect, useRef } from 'react';
import './Confirmation.css';

const Confirmation = ({ clearCart }) => {
  const hasClearedCart = useRef(false);

  useEffect(() => {
    if (!hasClearedCart.current) {
      clearCart();
      hasClearedCart.current = true;
    }
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="confirmation-message">
      <h2>Order Confirmed!</h2>
      <p>Thank you for your purchase.</p>
      <p>Your order details have been sent to your email.</p>
    </div>
  );
};

export default Confirmation;
