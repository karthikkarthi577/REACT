import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { useState } from "react";

const UseReducerExample = () => {
  let reducer = (state, action) => {
    console.log(action);

    if (action.type === "UPDATE_USERS") {
      return {
        ...state,
        userData: action.payload,
      };
    }

    if (action.type === "RELOAD") {
      return { ...state, isLoading: action.payload };
    }

    if (action.type === "DELETE") {
      var newusers = state.userData.filter((x) => {
        return x.id !== action.payload;
      });
      return {
        ...state,
        userData: newusers,
      };
    }

    if (action.type === "EDIT") {
      return {
        ...state,
        isEditing: action.payload,
      };
    }
    if (action.type === "UPDATE") {
      var newUsers = state.userData.map((x) => {
        if (x.id === action.payload.id) {
          return {
    
            id: action.payload.id,
            name: action.payload.name,
          };
        } else {
          return x;
        }
      });

      return {
        ...state,
        userData: newUsers,
      };
    }
    return state;
  };

  var initialstate = {
    userData: [],
    isLoading: false,
    isError: { status: false, msg: "" },
    isEditing: { status: false, id: 0, name: "" },
  };
  function update(id, name) {
    console.log(id, name);
    dispatch({
      type: "UPDATE",
      payload: { name, id },
    });
  }
  let [state, dispatch] = useReducer(reducer, initialstate);
  console.log(state);
  useEffect(async () => {
    dispatch({
      type: "RELOAD",
      payload: true,
    });

    dispatch({
      type: "ERROR",
      payload: { status: false, msg: "" },
    });
    try {
      let apiData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: "UPDATE_USERS",
        payload: apiData.data,
      });
      dispatch({
        type: "RELOAD",
        payload: false,
      });
      dispatch({
        type: "ERROR",
        payload: { status: false, msg: "" },
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: { status: true, msg: "error not found" },
      });
    }
  }, []);

  console.log(state);
  return (
    <div>
      <h1>{state.isLoading === true ? "Loading" : null}</h1>
      {state.isEditing.status === true ? (
        <Popupform
          id={state.isEditing.id}
          name={state.isEditing.name}
          update={update}
        />
      ) : null}
      {state.userData.map((x) => {
        return (
          <div>
            {x.name}
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  payload: x.id,
                })
              }
            >
              Delete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "EDIT",
                  payload: { status: true, id: x.id, name: x.name },
                })
              }
            >
              Edit
            </button>
          </div>
        );
      })}
    </div>
  );
};

let Popupform = ({ id, name, update }) => {
  let [state, setName] = useState(name);
  return (
    <h1>
      <input
        type="text"
        name="state"
        value={state}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          update(id, state);
        }}
      >
        SUBMITEDIT
      </button>
    </h1>
  );
};
export default UseReducerExample;
