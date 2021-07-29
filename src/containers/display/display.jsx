import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../../redux/actions/actionCreator";
import Display from "../../components/Display";

export default function DisplayContainer() {
  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();
  const removeHandle = () => {
    dispatch(removeData());
  };

  return <Display data={data} removeHandle={removeHandle} />;
}
