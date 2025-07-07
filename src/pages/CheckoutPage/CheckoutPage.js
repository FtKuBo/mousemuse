
import React, { useState } from 'react';
import Cart from './components/Cart';
import Shipping from './components/Shipping';
import Confirmation from './components/Confirmation';
import { useCart } from '../../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const { clearCart } = useCart();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Cart nextStep={nextStep} />;
      case 2:
        return <Shipping nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Confirmation clearCart={clearCart} />;
      default:
        return <Cart nextStep={nextStep} />;
    }
  };

  return (
    <div className="checkoutpage">
      <h2>Complete Your Order</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-color)' }}>
        Follow these simple steps to complete your purchase. We're excited for you to receive your MouseMuse products!
      </p>
      <div className="progress-bar">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Cart</div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Shipping</div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Confirmation</div>
      </div>
      {renderStep()}
    </div>
  );
};

export default CheckoutPage;
