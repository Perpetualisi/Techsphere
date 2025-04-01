import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Checkouts.css"; 

const Checkouts = ({ cartItems }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    navigate("/"); 
  };

  
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <button className="back-btn" onClick={() => navigate("/")}>← Back to Shop</button>

      <form onSubmit={handleCheckout} className="checkout-form">
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Shipping Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="payment">Payment Method</label>
          <select
            id="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <button type="submit" className="checkout-btn">Place Order</button>
      </form>

      <div className="cart-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} (x{item.quantity})
            </li>
          ))}
        </ul>
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Checkouts;
