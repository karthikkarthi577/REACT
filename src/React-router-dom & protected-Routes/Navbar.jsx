import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  let data = useAuth();
  console.log(data);

  return (
    <div>
      <div>
        <h1>Navbar</h1>
        <div className="container">
          <div className="section">
            <div className="left">logo</div>
            <div className="right">
              {/***  Link is in react router dom which is used for navigation without reloading[2] ****/}
              <Link to="/register">
                <div>Siginin</div>
              </Link>
              <Link to="/users">Users</Link>
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

              {data.user ? (
                <Link to="/logout">
                  <div onClick={data.signOut}>Logout</div>
                </Link>
              ) : (
                <Link to="/login">
                  <div>Login</div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
