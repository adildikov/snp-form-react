import React from "react";
import Display from "../Display/Display";
import Form from "../Form/Form";
import "./style.css";

export default function App() {
  return (
    <div className="app_wrapper">
      <Form />
      <Display />
    </div>
  );
}
