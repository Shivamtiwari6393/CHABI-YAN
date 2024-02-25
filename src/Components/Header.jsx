import React, { useState } from "react";
import "../Styles/Header.css";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={isActive ? "active" : ""}>
      <img src="chabhi-logo.jpg" alt="chabi" className="logo" />
      <ul className="nav-links">
            <a href="header.jsx">Home</a>
            <a href="header.jsx">Contact Us</a>
            <a href="header.jsx">Work</a>
            <a href="header.jsx">Impact</a>
            <a href="header.jsx">Blog</a>
            <a href="header.jsx">Join Us</a>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
