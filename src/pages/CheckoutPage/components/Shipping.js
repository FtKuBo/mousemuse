
import React from 'react';

const Shipping = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2>Shipping Information</h2>
      <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" required />

        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" name="postalCode" required />

        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" required />

        <button type="submit">Confirm Order</button>
      </form>
      <button onClick={prevStep} style={{ marginRight: '1rem' }}>Back to Cart</button>
    </div>
  );
};

export default Shipping;
