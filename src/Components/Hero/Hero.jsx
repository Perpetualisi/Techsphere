import React, { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    image: "/images/neon_workspace (1).jpg",
    // text: "Premium Quality. Built to Last.",
  },
  {
    image: "/images/dark_theme_laptops.jpg",
    // text: "Sleek Design. Ultimate Comfort.",
  },
  {
    image: "/images/high-angle-gaming-setup-indoors.jpg",
    // text: "Enhance Productivity with Style.",
  },
  {
    image: "/images/pexels-jakubzerdzicki-29942709.jpg",
    // text: "Innovation Meets Affordability.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="hero" className="hero">
      <div className="slider">
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentIndex ? "active" : ""}`}>
            <div className="overlay"></div>
            <img src={slide.image} alt={`Slide ${index + 1}`} loading="lazy" />
            <div className="text-container">
              <h2>{slide.text}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;