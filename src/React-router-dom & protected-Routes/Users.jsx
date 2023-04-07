import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import PrivateRoutes from "./PrivateRoutes";

const Users = () => {
  let [state, setState] = useState([]);
  let [form, setForm] = useState("");

  useEffect(async () => {
    let fetch = await axios.get("https://jsonplaceholder.typicode.com/users");
    setState(fetch.data);
  }, []);

  let handleSubmit = () => {
    let filterData = state.filter((x) => {
      if (x.name.toLowerCase().includes(form.toLowerCase())) {
        return x;
      }
    });
    setState(filterData);
  };

  return (
    <PrivateRoutes>
      <div>
        <h1>search data from user api</h1>
        <input
          type="text"
          name="form"
          value={form}
          id=""
          onChange={(e) => setForm(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        {state.map((x) => {
          return <p key={x.id}>{x.name}</p>;
        })}
      </div>
    </PrivateRoutes>
  );
};

export default Users;
