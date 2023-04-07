import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
import "./Home.css";
import PrivateRoutes from "./PrivateRoutes";

const Home = () => {
  return (
      <div>
        <h1>welcome to home page</h1>
        <div className="container">
          <div className="section">
            <div className="left">logo</div>
            <div className="right">
              {/***  Link is in react router dom which is used for navigation without reloading[2] ****/}
              <Link to="/login">
                <div>Login</div>
              </Link>
              <Link to="/register">
                <div>Siginin</div>
              </Link>
              <Link to="/info">
                <div>Info</div>
              </Link>
              <Link to="/navparams">
                <div>Params</div>
              </Link>
              <Link to="/useeffect">
                <div>UseEffect</div>
              </Link>
              <Link to="/AxiosPost">
                <div>Axios</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
