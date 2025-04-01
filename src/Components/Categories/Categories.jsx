
import React from "react";
import "./Categories.css";

const categories = [
  { name: "Laptops", image: "/images/Laptops.jpg" },
  { name: "Smartphones", image: "/images/Smartphones.jpg" },
  { name: "Headphones", image: "/images/Headphones.jpg" },
  { name: "Cameras", image: "/images/Camera.jpg" },
  { name: "Gaming", image: "/images/Gaming.jpg" },
];

const Categories = () => {
  return (
    <section className="categories" id="categories">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;