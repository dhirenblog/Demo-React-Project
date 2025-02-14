import React from "react";
import "./Header.css";

export default function Header({title}) {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <a href="">{title}</a>
        <a href="">About</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  );
};


