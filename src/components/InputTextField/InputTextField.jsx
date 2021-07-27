import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putData } from "../../redux/actions/actionCreator";
import "./style.css";

export default function InputTextField({ labelText, id }) {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const submitBlurHandler = () => {
    dispatch(putData(id, text));
  };

  return (
    <div className="textField">
      <label htmlFor={id} className="textField__label">
        {labelText}
      </label>
      <textarea
        name={id}
        id={id}
        className="textField__field"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={submitBlurHandler}
      />
    </div>
  );
}
