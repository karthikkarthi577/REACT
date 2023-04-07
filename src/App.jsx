import React, { Suspense, useReducer, useState } from "react";
import UseStateHook from "./Hooks/UseState";
import Parent from "./Props/forwordprops/Parent";
import Parent1 from "./Props/backwardprops/Parent";
import Form from "./Controlledform/form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./React-router-dom & protected-Routes/Home";
import Login from "./React-router-dom & protected-Routes/Login";
import Info from "./React-router-dom & protected-Routes/Info";
import ParamsNav from "./Pathparams,Useparams/ParamsNav";
import Params from "./Pathparams,Useparams/Params";
import Enhancedborder from "./HOC/Enhanced-border";
import CounterLogic from "./HOC/Example/CounterLogic";
import Counter from "./HOC/Example/Counter";
import UseEffect from "./Hooks/UseEffect";
import Axiospost from "./Axios/AxiosPost";
import Homepage from "./CRUD-FIREBASE/Homepage";
import { createContext } from "react";
import ComponentA from "./Context-Api/ComponentA";
import ComponentB from "./Context-Api/ComponentB";
import Todolist from "./Todolist.jsx/Todolist";
import SearchApi from "./Axios/ApiTaskExamples/SearchApi";
import UseReducer from "./Hooks/UseReducer";
import Useref from "./Hooks/Useref";
import Usememo from "./Hooks/Usememo";
import Usecallaback from "./Hooks/Usecallaback";
import CounterTitleA from "./Hooks/customhook/Example1/CounterTitleA";
import CounterTitleB from "./Hooks/customhook/Example1/CounterTitleB";
import Counter1 from "./Hooks/customhook/Example2/Counter1";
import Counter2 from "./Hooks/customhook/Example2/Counter2";
import Navbar from "./React-router-dom & protected-Routes/Navbar";
import { AuthProvider } from "./React-router-dom & protected-Routes/auth";
import Logout from "./React-router-dom & protected-Routes/Logout";
import Users from "./React-router-dom & protected-Routes/Users";

export const store = createContext();

// **** lazy loading {it is nothig but rendering only desired Compoent throught dynamic routing which decreases the time of rendering content in ui} *****//
// *** dynamicrouting,suspense,fallback are required for dynamic routing ***//

// **dynamic routing is used to import when we click the routed path[1] **//

let LazySignup = React.lazy(() =>
  import("./React-router-dom & protected-Routes/Signup")
);
let LazyLogin = React.lazy(() => {
  import("./React-router-dom & protected-Routes/Login");
});

const App = () => {
  let [state, setState] = useState(0);
  console.log(useState("hi"));
  console.log(useReducer(function data() {}, "helo"));

  {
    /**** HOC wrapping[2]  ***/
  }
  const StyledHocLgicLogin = Enhancedborder(Login);
  const StyledHocLgicInfo = Enhancedborder(Info);
  const IncrementLogic = CounterLogic(Counter);

  return (
    <div>
      <UseStateHook />
      <Parent />
      <Parent1 />
      <Form />

      {/**** HOC wrappied component usage starts[3] ***/}
      {/* <StyledHocLgicLogin /> */}
      <StyledHocLgicInfo />
      {/**** HOC wrappied component usage ends ***/}

      {/*****  ContextApi starts here[1] ******/}
      <store.Provider value={[state, setState]}>
        <ComponentA />
        <ComponentB />
        <button onClick={() => setState(state + 1)}>Increment</button>
      </store.Provider>
      {/*****  ContextApi Ends here ******/}

      {/* Todolist in react starts here */}
      <Todolist />
      {/* Todolist in react ends here */}

      {/* Search api with click starts */}
      <SearchApi />
      {/* Search api with click ends */}

      {/* useReducer starts here */}
      <UseReducer />
      {/* useReducer starts Ends here */}

      {/* useref start here */}
      <Useref />
      {/* useref ends here */}

      {/* useMemo starts here */}
      <Usememo />
      {/* useMemo ends here */}

      {/* Usecallback starts here */}
      <Usecallaback />
      {/* Usecallback ends here */}

      <CounterTitleA />
      <CounterTitleB />
      <Counter1 />
      <Counter2 />

      {
        /* suspense in lazy loading is used to add fall back to the component beacuse it will take few seconds to render*/ [
          2,
        ]
      }

      {/*** Context Api for protected routes starts[2]  ***/}
      <AuthProvider>
        {/***** routing setting part starts here[1] *****/}
        <Router>
          {/***  the components that should always render should place here ***/}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={ <Login />} />
            <Route
              path="/register"
              element={
                <Suspense fallback="loading">
                  <LazySignup />
                </Suspense>
              }
            />
            <Route path="/users" element={<Users />} />
            <Route path="/info" element={<Info />} />
            <Route path="/navparams" element={<ParamsNav />} />
            <Route path="/useeffect" element={<UseEffect />} />
            <Route path="/AxiosPost" element={<Axiospost />} />
            <Route path="/logout" element={<Logout />} />

            {/* **** we are using /:variable to store params in url[2]*******/}
            <Route path="/params/:name" element={<Params />} />

            {/**** HOC wrappied component usage starts[3] ***/}
            <Route path="/increment" element={<IncrementLogic />} />
            {/**** HOC wrappied component usage ends ***/}

            {/* ******CRUD fireBase starts***** */}
            <Route path="/homepage" element={<Homepage />} />
            {/* ******CRUD fireBase ends***** */}
          </Routes>
        </Router>
        {/***** routing setting part ends here *****/}
      </AuthProvider>
      {/*** Context Api for protected routes starts[2]  ***/}
    </div>
  );
};

export default App;
