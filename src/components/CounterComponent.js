import React, { useReducer } from "react";
let initialValue = 0;
const reducerfunction = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
function CounterComponent() {
  const [data, hello] = useReducer(reducerfunction, initialValue);
  return (
    <div>
      <h4>Count - {data}</h4>
      <button
        onClick={() => {
          hello("increment");
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          hello("decrement");
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          hello("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}

export default CounterComponent;

/**
 this above code is a demo of use reducer and hot it can be used as 
 useState 

 here we had demonstrated that how is use state works as it returns two
 parameter one is state of data and other is callback function the function
 takes action type as parameter e.g., hello('increment') once the call back
 function is called it will move to reducerFunction and check with the 
 swithc case on type of action and once the action is matched it will
 respectively update the state of value which is passed in 
 reducerfucntion and will respective return it and the returned value will
 be updated in return of useReducers retrun value data or state as e.g.,
 const [data, callbackFunciton]= useReducer(state,action);
 and respectively data will gets updated and can be re rendered
 */
