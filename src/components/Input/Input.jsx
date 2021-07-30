import React from "react";
import "./style.css";

export default React.memo(function Input({
  text,
  labelText,
  id,
  isError,
  onBlur,
  onChangeText,
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
        onChange={onChangeText}
        onBlur={onBlur}
      />
      {isError && <p className="error">{errorMessage}</p>}
    </div>
  );
});
