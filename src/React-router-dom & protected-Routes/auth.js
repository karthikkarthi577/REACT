import React, { createContext, useContext, useState } from "react";

export let authContext = createContext();

export let AuthProvider = ({ children }) => {
  let [user, setUser] = useState();
  let login = (userName) => {
    setUser(userName);
  };
  let signOut = (userName) => {
    console.log(userName);
    setUser(null);
  };

  return (
    <authContext.Provider value={{user, login, signOut}}>
      {children}
    </authContext.Provider>
  );
};

// **Custom Hook**//
export let useAuth = () => {
  return useContext(authContext);
};
