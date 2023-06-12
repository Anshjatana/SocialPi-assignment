import React from "react";

export default function Header() {
  return (
    <div id="header">
      <div id="navbar">
        <div className="items">
          <div id="Logo">
            <img
              src="https://socialpi.ai/wp-content/uploads/2022/08/Colored-Logo.png"
              alt="logo"
            ></img>
          </div>
          <ul id="navbar-items">
            <li>Home</li>
            <li>About us</li>
            <li>Contests</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
