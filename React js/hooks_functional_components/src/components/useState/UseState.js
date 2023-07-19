import React, { useState } from "react";

function UseState() {
    const [count, setCount] = useState(0);
    console.log("use State component is rendered")
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)} >reset</button>
    </div>
  );
}

export default UseState;
