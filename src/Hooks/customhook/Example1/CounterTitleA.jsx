import React from "react";
import { useState } from "react";
import Customhook from "./Customhook";

const CounterTitleA = () => {
  let [state, setState] = useState(0);
  console.log(state);
  Customhook(state);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>incrementA</button>
    </div>
  );
};

export default CounterTitleA;
