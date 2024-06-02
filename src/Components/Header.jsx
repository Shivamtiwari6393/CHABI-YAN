/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import style from "../Styles/Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className={isActive ? style["active"] : style[""]}>
      <img src="chabi-logo.png" alt="chabi" className={style["logo"]} />
      <h4 id={style["title"]}> Chabi-Yan</h4>
      <div className={style["nav-links"]}>
        <Link to={"/"} onClick={closeMenu}>
          Home 
        </Link>
        <Link to={"/About-Us"} onClick={closeMenu}>
          About Us
        </Link>

        <Link to={"/Get-Involved"} onClick={closeMenu}>
          Get Invovled
        </Link>
        <Link to={"/Projects"} onClick={closeMenu}>
          Projects
        </Link>
        <Link to={"/Work"} onClick={closeMenu}>
          Work
        </Link>
        <Link to={"/Team"} onClick={closeMenu}>
          Team
        </Link>
      </div>

      <div className={style["social-links"]}>
        <a href="/" className="fa fa-facebook"></a>
        <a href="/" className="fa fa-twitter"></a>
        <a href="/" className="fa fa-youtube"></a>
        <a href="/" className="fa fa-instagram"></a>
      </div>

      <div className={style["burger"]} onClick={toggleMenu}>
        <div className={style["line1"]}></div>
        <div className={style["line2"]}></div>
        <div className={style["line3"]}></div>
      </div>
    </nav>
  );
}
