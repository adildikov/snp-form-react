import React from "react";
import "./style.css";

export default React.memo(function InputTextField({
  labelText,
  id,
  text,
  submitBlurHandler,
  setTextHandler,
}) {
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
        onChange={setTextHandler}
        onBlur={submitBlurHandler}
      />
    </div>
  );
});
