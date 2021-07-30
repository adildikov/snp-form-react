import React from "react";
import DisplayContainer from "../Display/DisplayContainer";
import Form from "../Form/Form";
import "./style.css";

export default function App() {
  return (
    <div className="app_wrapper">
      <Form />
      <DisplayContainer />
    </div>
  );
}
