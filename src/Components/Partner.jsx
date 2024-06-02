import React from "react";
import "../Styles/Partner.css";
export default function Partner() {
  return (
    <div className="partner">
      <h3>Our Partners</h3>

      <div className="images">
        <a href="https://kmclu.ac.in/">
          <img src="kmclu-logo.png" alt="" />
        </a>
        <a href="https://www.lkouniv.ac.in/">
          <img src="lu-logo.png" alt="" />
        </a>
        <a href="https://www.bbau.ac.in/">
          <img src="bbau-logo.png" alt="" />
        </a>
        <a href="https://dsmru.up.nic.in/">
          <img src="up-logo.png" alt="" />
        </a>
      </div>
    </div>
  );
}
