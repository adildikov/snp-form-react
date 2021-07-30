import React, { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import InputTextField from ".";
import { putData } from "../../redux/data/actions";

export default React.memo(function InputTextFieldContainer({ labelText, id }) {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleBlur = useCallback(() => {
    dispatch(putData(id, text));
  }, [dispatch, id, text]);

  const handlerChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <InputTextField
      labelText={labelText}
      id={id}
      text={text}
      onBlur={handleBlur}
      onChangeText={handlerChangeText}
    />
  );
});
