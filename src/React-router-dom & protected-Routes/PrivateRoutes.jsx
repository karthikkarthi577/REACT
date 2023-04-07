import React from "react";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "./auth";
//** private or protected routes can only acess by the authenticated user  **/
const PrivateRoutes = ({ children }) => {
  console.log(children);
  let navigate = useNavigate();
  let auth = useAuth();

  if (!auth.user) {
    return navigate("/login");
  }
  return <div>{children}</div>;
};

export default PrivateRoutes;
