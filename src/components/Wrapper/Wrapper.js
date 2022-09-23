import React from "react";
import "./Wrapper.scss";

function Wrapper(props) {
  return (
    <div className="wrapper">
      {props.children}
    </div>
  );
}

export default Wrapper;

export function WrapperMain(props) {
  return (
    <div className="wrapper__main">
      {props.children}
    </div>
  );
}

export function WrapperRight(props) {
  return (
    <div className="wrapper__right">
      {props.children}
    </div>
  );
}
