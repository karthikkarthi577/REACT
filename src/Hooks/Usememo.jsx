import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Usememo.css";

const Usememo = () => {
  // ** use Memo is used to icrease Performance of component**//
  let [count, setCount] = useState(1);
  let [change, setChange] = useState(true);

  // ** case 1[1]
  let incrementTwice = useMemo(() => {
    return twice(count);
  }, [count]);

  // ** case2[1]
  // ** if we pass any object or any function variable it get mounted again due to state change component re rerender if we use memo it will restrict it render **//
  let data = useMemo(() => {
    return {
      name: "guru",
    };
  }, [change]);

  // ** case2[2]
  // ** because of object remounting whith out it real updating the useEffect will work to avoid that we ne use obj in usememo hook**//
  useEffect(() => {
    console.log(change);
  }, [data]);

  // case 1[2]
  function twice(number) {
    for (let i = 0; i < 1000000; i++) {}
    return number * 2;
  }
  return (
    <div>
      <input
        type="text"
        name="count"
        value={count}
        id=""
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setChange(!change)}>Change</button>
      {change === true ? (
        <h1 className="red">count{incrementTwice}</h1>
      ) : (
        <h1 className="viloet">count{incrementTwice}</h1>
      )}
    </div>
  );
};

export default Usememo;
