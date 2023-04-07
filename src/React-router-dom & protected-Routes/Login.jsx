import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
  let [name, setName] = useState("");
  let data = useAuth();
  // *** useNavigate is used for navigation purpose 1paramter path 2paramter replace object which replace the previous path to 1parameter path so that previous and next button in browser would not working when passing this 2 parameter 2nd paramter is optional ***//
  let navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>Login Page</h1>
        <input
          type="text"
          name="name"
          value={name}
          id=""
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            data.login(name);
            navigate("/", { replace: true });
          }}
        >
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
