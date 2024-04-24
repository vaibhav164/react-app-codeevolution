import React from "react";
import { UserContext, SecondContext } from "../App";
function Component2() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <SecondContext.Consumer>
            {(value2) => {
              return (
                <React.Fragment>
                  <div>Data for context vlaue is {value}</div>
                  <div>Data for context vlaue is {value2}</div>
                </React.Fragment>
              );
            }}
          </SecondContext.Consumer>
        );
      }}
    </UserContext.Consumer>
  );
}

export default Component2;
