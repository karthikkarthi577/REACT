import React, { useState, useCallback } from "react";

//**  parent Componet **//
// ** useCall back is used to improve perfomance of component **//
// ** useCall back 1paramter-function 2paramter dependency based on dependency the function will update
// ** useCall back is used to help the Reactmemo in itendify the functions that are really being changed because the Reactmemo doesnot identify the really changed function it will think the function as updated function as when the state is updated the whole component and inside functions rerenders(mounting)  **//
const Usecallaback = () => {
  let [age, setAge] = useState(0);
  let [salary, setSalary] = useState(110000);

  let incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  let incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  return (
    <div>
      <Count text={"age"} data={age} />
      <Button handler={incrementAge}>Increment age</Button>
      <Count text={"salary"} data={salary} />
      <Button handler={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default Usecallaback;

// ** children Compoent **//
// ** React.memo is HOC which used to get only changed props values when state is updated of respective props (at initially render it will think every props values are new as it is rerendering and starts from new) and will neglect the functions {handler-19} which are rerender due to state changes{age,salary-5,6} and it considered as updated one and it can be avoided by useCallback**//
const Count = React.memo(({ text, data }) => {
  console.log(text);
  console.log(data);
  return (
    <div>
      <div>
        {text}:{data}
      </div>
    </div>
  );
});

const Button = React.memo(({ children, handler }) => {
  console.log(children);
  console.log("Button component rendered");
  return <div onClick={handler}>{children}</div>;
});

React.memo(Button);
