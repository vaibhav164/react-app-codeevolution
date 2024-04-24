import React from "react";
import "./App.css";
import { Heading } from "./components/Heading";

export const userContext = React.createContext();
const App = () => {
  return (
    <div className="App">
      <userContext.Provider value="Vaibhav's first Context">
        <Heading />
      </userContext.Provider>
    </div>
  );
};

export default App;
