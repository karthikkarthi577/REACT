import React from "react";
import { useReducer } from "react";
import UseReducerExample from "../Axios/ApiTaskExamples/UseReducerExample-RUD";

// ** it is used for state managment and it is alternative for usestate bascially it uses usestate internally **//

// **  it will take reducerfunction and state as input **//

const UseReducer = () => {
  //** reducer function will take 2 paramters which one is state{which will have current state data the dispatch passes} and 2 parameter is action{which will have object with has type and payload which has given by dispatch} similar to state[4]

  const reducer = (state, action) => {
    if (action.type === "delete") {
      const newPersons = state.data.filter((x) => {
        return x.id !== action.payload;
      });

      return {
        data: newPersons,
      };
    }
  };

  // ** useReducer will return array which has 2 items in an array first one is state in array and second one is function{dispatch} **//[1]

  let [state, dispatch] = useReducer(reducer, {
    data: [
      { name: "karthi", age: 22, id: 1 },
      { name: "guru", age: 24, id: 2 },
    ],
  });

  // ** dispatch function is used for updating state while updating the dispatch will communicate to the reducer function and it will perfom the final action[2]**//

  return (
    <div>
      <h1>useReducer</h1>
      <div>
        {state.data.map((x) => {
          return (
            // dispatch is intermidiate function for updating state we need to mention type and payload type is mandatory which helps reducer function to perform[3]**//
            <p>
              {x.name}
              <button
                onClick={() => {
                  dispatch({
                    type: "delete",
                    payload: x.id,
                  });
                }}
              >
                delete
              </button>
            </p>
          );
        })}
      </div>
      <UseReducerExample />
    </div>
  );
};

export default UseReducer;
