import React from "react";
import "./Input.css";
const Input = props => {
  return (
    <div
      className="input"
      style={{
        fontSize:
          props.currentInput.length > 14 ||
          props.currentInput.toString().length > 14
            ? 30
            : 50
      }}
    >
      {props.currentInput}
    </div>
  );
};

export default Input;
