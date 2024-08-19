import React from "react";
import "./Navbar.css";
import faviconW from "./favicon_W.png"; 
import faviconB from "./favicon_B.png"; 
import favicon from "./favicon.png"; 

export default function Navbar(props) {
  return (
    <div className="navbar">
      <img src={favicon} alt="Favicon" style={{width: "40px"}} />
      <h2>To-Do List Manager</h2>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          style={{ transition: "all 200ms" }}
          onChange={props.switchTheme}
        />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon fa-sm"></i>
          <i className="fas fa-sun fa-sm"></i>
          <div className="ball" />
        </label>
      </div>
    </div>
  );
}
