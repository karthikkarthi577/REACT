import { useState } from "react";

// ** customHook is used to create custom hook with specific purpose **//
// ** useCamel use is mandatory or rule to be followed while creating custom hook **//

const UseCounter = () => {
  let [counter, setCounter] = useState(0);
  let increment = () => {
    setCounter(counter + 1);
  };
  let decrement = () => {
    setCounter(counter - 1);
  };

  // ** this return can be in form of array or object . **//
  // ** while using this return we should destructure  and use it with help of Custom hook[ex in counter1,counter2] **//
  return [counter, increment, decrement];
};

export default UseCounter;
