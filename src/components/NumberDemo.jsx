import React from "react";
import { useState } from "react";

function NumberDemo() {
  const [count, setCount] = useState(0);

  function decrementHandler(prevState) {
    if (prevState != 0) {
      --prevState;
    }
    return prevState;
  }

  return (
    <div className="App">
      <h1>Count is {count}</h1>

      <h3>
        Count is {count === 0 || count % 5 != 0 ? "NOT" : ""} multiple of 5
      </h3>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(decrementHandler)}>Decrement</button>
    </div>
  );
}

export default NumberDemo;
