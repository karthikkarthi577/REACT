import React, { useState } from "react";
import Customhook from "./Customhook";

const CounterTitleB = () => {
  let [state, setState] = useState(0);
  Customhook(state);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>incrementB</button>
    </div>
  );
};

export default CounterTitleB;
