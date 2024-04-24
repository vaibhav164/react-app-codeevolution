import React, { useContext } from "react";
import { UserContext, SecondContext } from "../App";
function Component2() {
  const userData = useContext(UserContext);
  const secondContextData = useContext(SecondContext);
  return (
    <React.Fragment>
      <p>Data for context of user {userData}</p>
      <p>Data for Second COntext {secondContextData}</p>
    </React.Fragment>
  );
}

export default Component2;
