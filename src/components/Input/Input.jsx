import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putData } from "../../redux/actions/actionCreator";
import "./style.css";

export default function Input({ labelText, id, ...attrs }) {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const submitBlurHandler = () => {
    dispatch(putData(id, text));
  };

  return (
    <div className="input">
      <label htmlFor={id} className="input__label">
        {labelText}
      </label>
      <input
        name={id}
        id={id}
        {...attrs}
        className="input__field"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={submitBlurHandler}
      />
    </div>
  );
}
