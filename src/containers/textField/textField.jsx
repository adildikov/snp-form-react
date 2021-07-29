import React, { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import InputTextField from "../../components/InputTextField";
import { putData } from "../../redux/actions/actionCreator";

export default React.memo(function InputTextFieldContainer({ labelText, id }) {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const submitBlurHandler = useCallback(() => {
    dispatch(putData(id, text));
  }, [dispatch, id, text]);

  const setTextHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <InputTextField
      labelText={labelText}
      id={id}
      text={text}
      submitBlurHandler={submitBlurHandler}
      setTextHandler={setTextHandler}
    />
  );
});
