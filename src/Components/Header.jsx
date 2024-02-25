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
            <a href="#">Home</a>
            <a href="#">Contact Us</a>
            <a href="#">Work</a>
            <a href="#">Impact</a>
            <a href="#">Blog</a>
            <a href="#">Join Us</a>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
