import React from "react";
import "./Products.css";


const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: "$1,499",
    image: "/images/Gaming Laptop.jpg",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: "$199",
    image: "/images/Wireless Headphones.jpg",
  },
  {
    id: 3,
    name: "Smartwatch",
    price: "$299",
    image: "/images/Smartwatch.jpg",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: "$129",
    image: "/images/Mechanical Keyboard.jpg",
  },
];

const Products = ({ addToCart }) => {
  
  const handleImageError = (e) => {
    e.target.src = "/images/placeholder.jpg"; 
  };

  return (
    <section id="products" className="products">
      <h2>Our Latest Tech Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onError={handleImageError} 
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button
                onClick={() => addToCart(product)} 
                className="add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
