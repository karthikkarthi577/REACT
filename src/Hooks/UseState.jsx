import { useState } from "react";
import Button from "../ReusableComponent/Button";

let UseStateHook = () => {
  let [name, setName] = useState("guru");
  let [data, setData] = useState({
    type: "boolean",
    behaviour: "regular",
  });
  let { type, behaviour } = data;
  console.log(data);
  console.log({ ...data });
  return (
    <div>
      <div className="useState">
        <div>
          useState normal inital value <b>{name}</b>
        </div>
        <div>
          useState object initaial value <b>{data.type}</b>
        </div>
        <button onClick={() => setName("karthi")}>updateString</button>
        <button onClick={() => setData({ ...data, type: "shaj" })}>
          updateObj
        </button>
      </div>
      <div className="reusableComponet">
        <Button value={"hooks"} />
      </div>
    </div>
  );
};

export default UseStateHook;
