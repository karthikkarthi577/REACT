import React from "react";
import { useContext } from "react";
import { store } from "../App";

const ComponentA = () => {
  // *******context api is a techinc where we can pass  same data to desired level of component with out passing props at each stage****//
  // **** use Context is used to consume data[2]******//
  let [state, setState] = useContext(store);
  return <div>countA{state}</div>;
};

export default ComponentA;
