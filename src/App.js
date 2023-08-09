import "./styles.css";
import React, { useState } from "react";
import Cart from "./Cart";
import New from "./New";
export default function App() {
  return (
    <div className="App">
      <New />
      <Cart />
    </div>
  );
}
