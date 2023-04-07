import React from "react";
import UseCounter from "./UseCounter";

const Counter1 = () => {
  let [counter, increment, decrement] = UseCounter();
  return (
    <div>
      <h1>`count${counter}`</h1>
      <div>
        <button onClick={increment}>incrementA</button>
      </div>
      <div>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};

export default Counter1;
