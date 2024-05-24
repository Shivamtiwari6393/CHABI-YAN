/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div id="one"> ©️ 2024 All Right Reserved</div>
      <div className="privacy-policy">
        <Link to={"Privacy-Policy"}>Privacy Policy</Link>|
        <Link to={"/Disclaimer"}>Disclaimer</Link>
      </div>
      <div className="links">
        <a href="header.jsx" className="fa fa-facebook"></a>
        <a href="header.jsx" className="fa fa-twitter"></a>
        <a href="header.jsx" className="fa fa-linkedin"></a>
        <a href="header.jsx" className="fa fa-whatsapp"></a>
        <a href="header.jsx" className="fa fa-telegram"></a>
      </div>
    </div>
  );
}
