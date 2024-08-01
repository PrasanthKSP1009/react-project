import React from "react";

var FuncComp = (props) => {
  return (
    <div>
      <h1>First Name: {props.first_name}</h1>
      <h2>Last Name: {props.last_name}</h2>
    </div>
  );
};
export default FuncComp;
