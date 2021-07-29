import React from "react";
import DisplayContainer from "../../containers/display";
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
