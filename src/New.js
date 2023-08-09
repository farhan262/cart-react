import React, { useState } from "react";

export default function New() {
  const [count, setCount] = useState(0);
  const addtocart = () => {
    setCount(() => count + 1);
  };
  return (
    <div className="App">
      <div className="box">
        {" "}
        BTC
        <p>$25000</p>
      </div>

      <input type="text" />
      <button onClick={() => addtocart()}> Add</button>

      <div className="box">
        {" "}
        DODGE
        <p>$0.75</p>
      </div>
      <input type="text" />
      <button onClick={() => addtocart()}> Add</button>
      <div className="box">
        {" "}
        RIPPLE
        <p>$1.5 </p>
      </div>
      <input type="text" />
      <button onClick={() => addtocart()}> Add</button>
    </div>
  );
}
