import React, { useRef, useState } from "react";
import { useEffect } from "react";

// ** Useref is used to interact with dom directly **//
// ** it does not update the whole component when state is updated as like Usestate**//
// ** with this we can avoid the useEffect inifinte loop without dependency**//
// ** it is used for focus and blur for the input field**//
const Useref = () => {
  let [state, setState] = useState("");
  let ref = useRef(1);
  let fb = useRef();

  /* preventing inifinity loop with out dependency while updating value */
  useEffect(() => {
    ref.current = ref.current + 1;
  });

  /* focusing and blur in input filed */
  let focus = () => {
    fb.current.focus();
  };
  let blur = () => {
    fb.current.blur();
  };
  return (
    <div>
      {/* preventing inifinity loop */}
      <input
        type="text"
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <h1>{state}</h1>
      <h1>{ref.current}</h1>

      {/* focus and blur  in the input filed*/}
      <input type="text" name="" id="" ref={fb} />
      <button onClick={focus}>focus</button>
      <button onClick={blur}>blur</button>
    </div>
  );
};

export default Useref;
