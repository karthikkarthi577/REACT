// **** CRUD using react and firebase(8.2) in Single Page *****//
import React from "react";
import { useState } from "react";
import "./Homepage.css";
import firebaseDb from "./firebase";
import { useEffect } from "react";
const Homepage = () => {
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let [getData, setGetData] = useState({});
  let [updateFormData, setUpdateFormData] = useState({
    email: "",
    password: "",
  });
  let [updateId, setUPdateId] = useState("");
  let [condition, setCondition] = useState(null);
  let [buttonId, setButtonId] = useState("");

  //*** on in firebase is used to read or getdata**** //
  useEffect(() => {
    firebaseDb.child("postdata").on("value", (details) => {
      setGetData(details.val());
      console.log(getData);
    });
  }, [state]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleUpdate = (e) => {
    let { name, value } = e.target;
    setUpdateFormData({ ...updateFormData, [name]: value });
  };
  //*** push in firebase is used to push data**** //
  let handleSubmit = async (e) => {
    e.preventDefault();
    await firebaseDb.child("postdata").push(state, (err) => {
      if (err) {
        alert(err);
      }
    });
    setState({
      email: "",
      password: "",
    });
    console.log(state);
  };

  let handleSubmitEdit = (e) => {
    e.preventDefault();
    // ****set is used for updating in child we are representing which id and passing data to set*****//
    firebaseDb.child(`postdata/${updateId}`).set(updateFormData, (err) => {
      if (err) {
        alert(err);
      }
      setUpdateFormData({
        email: "",
        password: "",
      });
    });
  };

  return (
    <div>
      {/********POST FORM***** */}
      <div className="containerdiv">
        <div className="formhomeget">
          <p>UserData GET</p>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                value={state.email}
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input
                type="text"
                name="password"
                value={state.password}
                id="password"
                onChange={handleChange}
              />
            </div>

            <button>submitdata</button>
          </form>
        </div>

        {/****** EDIT FORM **********/}

        {condition === true && updateId === buttonId ? (
          <div className="formhomeedit">
            <form action="" onSubmit={handleSubmitEdit}>
              <p>UserData UPDATE</p>
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  value={updateFormData.email}
                  id="email"
                  onChange={handleUpdate}
                />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input
                  type="text"
                  name="password"
                  value={updateFormData.password}
                  id="password"
                  onChange={handleUpdate}
                />
              </div>
              <button>submitdata</button>
            </form>
          </div>
        ) : null}
      </div>

      {/* ********GET DATA and DELETE operations******* */}
      <div className="getData">
        {Object.keys(getData).map((data) => {
          return (
            <div className="SingleDataCard">
              <p>{getData[data].email}</p>
              <p>{getData[data].password}</p>
              <button
                className="update"
                id={data}
                onClick={(e) => {
                  setUpdateFormData(getData[data]);
                  setUPdateId(data);
                  if (e.target.id === data) {
                    setCondition(true);
                  }
                  setButtonId(e.target.id);
                }}
              >
                update
              </button>
              {/**** remove is used to delete data from the firebase db  ***/}
              <button
                className="delete"
                onClick={() =>
                  firebaseDb.child(`postdata/${data}`).remove((err) => {
                    if (err) {
                      alert(err);
                    }
                  })
                }
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
