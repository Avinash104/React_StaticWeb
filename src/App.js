import "./styles.css";
import React from "react";
import Main from "./Components/Main.js";
import Navbar from "./Components/Navbar.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
}
