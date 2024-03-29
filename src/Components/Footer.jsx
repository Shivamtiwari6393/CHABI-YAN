import React from "react";
import "../Styles/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div id="one">@ 2024 All Right Reserved</div>
      <div id="two">Khwaja Moinuddin Chishti Language University</div>
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
