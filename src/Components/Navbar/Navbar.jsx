import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Navbar = ({ cartCount, cartItems, onCheckoutClick }) => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchText, setSearchText] = useState(""); 

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const handleSearchClear = () => {
    setSearchText(""); 
  };

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="logo">Techsphere</div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} 
        />
        <FaSearch className="search-icon" />
        {searchText && (
          <FaTimes
            className="search-clear-icon"
            onClick={handleSearchClear} 
          />
        )}
      </div>

      <ul className={`nav-links ${mobileMenu ? "open" : ""}`}>
        <li onClick={() => handleScroll("hero")}>Home</li>
        <li onClick={() => handleScroll("products")}>Products</li>
        <li onClick={() => handleScroll("categories")}>Categories</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
        <li className="cart-icon">
          <Link to="/checkout" onClick={() => { closeMenu(); onCheckoutClick(); }}>
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>

      <div className="menu-icon-container">
        
        <div className="menu-icon" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </div>

        
        {mobileMenu && (
          <div className="cancel-icon" onClick={closeMenu}>
            <FaTimes />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
