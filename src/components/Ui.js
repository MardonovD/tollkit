import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/Counter";
const Ui = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  console.log(counter);
  return (
    <div className="ui">
      <h1>Counter ichidagi malumot : {counter.data}</h1>
      <button onClick={() => dispatch(increment())} className="btn btn-danger">
        +
      </button>
      <button onClick={() => dispatch(decrement())} className="btn btn-primary">
        -
      </button>
    </div>
  );
};

export default Ui;
