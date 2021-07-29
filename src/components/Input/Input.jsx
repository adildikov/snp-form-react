import React from "react";
import "./style.css";

export default function Input({
  text,
  labelText,
  id,
  isError,
  submitBlurHandler,
  onChangeHandler,
  errorMessage,
  attrs,
}) {
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
        onChange={onChangeHandler}
        onBlur={submitBlurHandler}
      />
      {isError && <p className="error">{errorMessage}</p>}
    </div>
  );
}
