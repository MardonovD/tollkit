import React from "react";
import { useSelector } from "react-redux";
const Ui = () => {
  const counter = useSelector((store) => store.counter);
  console.log(counter);
  return (
    <div className="ui">
      <h1>Counter ichidagi malumot : {counter.data}</h1>
    </div>
  );
};

export default Ui;
