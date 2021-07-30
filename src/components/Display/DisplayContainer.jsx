import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Display from ".";
import { removeData } from "../../redux/data/actions";
import { getData } from "../../redux/data/selectors";

export default function DisplayContainer() {
  const data = useSelector(getData);

  const dispatch = useDispatch();

  const removeHandle = useCallback(() => {
    dispatch(removeData());
  }, [dispatch]);

  return <Display data={data} removeHandle={removeHandle} />;
}
