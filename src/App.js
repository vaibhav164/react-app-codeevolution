import React from "react";
import "./App.css";
import { Heading } from "./components/Heading";

export const UserContext = React.createContext();
export const SecondContext = React.createContext();
const App = () => {
  return (
    <div className="App">
      <UserContext.Provider value={"Vaibhav's first Context"}>
        <SecondContext.Provider value={"second context Value"}>
          <Heading />
        </SecondContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
