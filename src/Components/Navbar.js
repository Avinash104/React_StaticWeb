import React from "react";

export default function Navbar() {
  return (
    <nav className="Nav-bar">
      <img
        src={require("../Images/reactjs-icon.png")}
        alt="React Icon"
        className="nav--logo"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
