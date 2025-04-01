import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkouts from "./Components/Checkouts/Checkouts.jsx";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products addToCart={addToCart} />
              <Categories />
              <Contact />
              {cart.length > 0 && (
                <button
                  onClick={() => (window.location.href = "/checkout")}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4caf50",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    marginTop: "20px",
                  }}
                >
                  Proceed to Checkout
                </button>
              )}
            </>
          }
        />
        <Route path="/checkout" element={<Checkouts cartItems={cart} />} />
      </Routes>

      <Footer />
    </Router> 
  );
};

export default App;
