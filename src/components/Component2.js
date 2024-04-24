import React from "react";
import { userContext } from "../App";
function Component2() {
  return (
    <userContext.Consumer>
      {(value) => <div>Data for context vlaue is {value}</div>}
    </userContext.Consumer>
  );
}

export default Component2;
