import React from "react";
import { useContext } from "react";
import { store } from "../App";

const ComponentB = () => {
  let [state, setState] = useContext(store);
  return;
  <div>
    ComponentB
    {state}
  </div>;
};

export default ComponentB;
