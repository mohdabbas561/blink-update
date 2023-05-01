import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate } from 'react-router-dom';
import "./CheckoutPage.css"

const CheckoutPage = () => {
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();


  const handleToken = (token) => {
    // Send the token to your server to process the payment
    console.log(token);
    setIsPaid(true);
  };

  if (isPaid) {
    // Redirect the user to the thank you page after payment is completed
    navigate('/ThankYouPage');
    return null;
  }

  return (
    <div className="Check">
      <h2 style={{marginBottom:"60px"}}>Please Add Address and Payment Details</h2>
      <form>
       <h2 style={{marginBottom:"60px"}}>Payment Methods</h2>
      </form>
      <StripeCheckout style={{marginBottom:"60px"}}
        token={handleToken}
        stripeKey="pk_test_51N1RdtSGJ3QNgFBVKw8PfVmT7bo6wOWPKZIOONpNrO776IhcPLOYJFsu5qmtYo9x2fL3wtFlAG17V5lY7ZBM4AaK00QicENFJI"
        amount={1000} // amount in cents
        name="My Awesome Store"
        description="Purchase Description"
        shippingAddress
        billingAddress
      />
    </div>
  );
};

export default CheckoutPage;
