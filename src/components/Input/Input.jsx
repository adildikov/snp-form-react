import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putData } from "../../redux/actions/actionCreator";
import "./style.css";
import { validators } from "../../utils/validation";

export default function Input({ labelText, id, validation, ...attrs }) {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const validatorChoose = () => {
    switch (validation) {
      case "email":
        return validators.email;
      case "studyLength":
        return validators.studyLength;
      default:
        return validators.maxLength;
    }
  };

  const validator = text ? validatorChoose() : validators.required;

  const submitBlurHandler = () => {
    if (!validator.isValid(text)) {
      setError(true);
    } else {
      setError(false);
      dispatch(putData(id, text));
    }
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
      {error && <p className="error">{validator.error}</p>}
    </div>
  );
}
