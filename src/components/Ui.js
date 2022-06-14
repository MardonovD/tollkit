import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Ui = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counter);
  console.log(counter);
  return (
    <div className="ui">
      <h1>Counter ichidagi malumot : {counter.data}</h1>
    </div>
  );
};

export default Ui;
