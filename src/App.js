import React, { useEffect, useState } from "react";
import "./App.css";
import CounterComponent from "./components/CounterComponent";
console.log("file_Log");
const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect Log");
  });
  return (
    <div className="App">
      {/* <p>{count}</p> */}
      <CounterComponent />
    </div>
  );
};

export default App;
