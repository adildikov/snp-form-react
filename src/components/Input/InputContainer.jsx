import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putData } from "../../redux/actions/actionCreator";
import { validators } from "../../utils/validation";
import Input from "./Input";
import { useMemo } from "react";
import { useCallback } from "react";

export default React.memo(function InputContainer({
  labelText,
  id,
  validation,
  ...attrs
}) {
  const dispatch = useDispatch();

  const [isError, setError] = useState(false);
  const [text, setText] = useState("");

  const validatorChoose = useMemo(() => {
    switch (validation) {
      case "email":
        return validators.email;
      case "studyLength":
        return validators.studyLength;
      case "nonrequired":
        return validators.nonrequired;
      case "date":
        return validators.date;
      default:
        return validators.maxLength;
    }
  }, [validation]);

  const validator =
    text || validation === "nonrequired"
      ? validatorChoose
      : validators.required;

  const submitBlurHandler = useCallback(() => {
    if (!validator.isValid(text)) {
      setError(true);
    } else {
      setError(false);
      dispatch(putData(id, text));
    }
  }, [dispatch, validator, id, text]);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <Input
      text={text}
      id={id}
      labelText={labelText}
      isError={isError}
      submitBlurHandler={submitBlurHandler}
      onChangeHandler={onChangeHandler}
      errorMessage={validator.error}
      attrs={attrs}
    />
  );
});
