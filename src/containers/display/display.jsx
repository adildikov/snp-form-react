import React from "react";
import { connect, useDispatch } from "react-redux";
import { removeData } from "../../redux/actions/actionCreator";
import Display from "../../components/Display";

function DisplayContainer({ data }) {
  const dispatch = useDispatch();
  const removeHandle = () => {
    dispatch(removeData());
  };

  return <Display data={data} removeHandle={removeHandle} />;
}

export default connect(({ data }) => ({
  data,
}))(DisplayContainer);
