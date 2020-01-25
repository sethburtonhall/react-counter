import React from "react";
import CounterA from "./counterA";

const Counters = props => {
  const { counters, onReset, onIncrement, onDelete } = props;
  return (
    <div className="counters">
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter, index) => (
        <CounterA
          key={index}
          counter={counter}
          onIncrement={onIncrement}
          onDelete={onDelete}
        >
          <h6>Class Component with id {counter.id}</h6>
        </CounterA>
      ))}
    </div>
  );
};

export default Counters;
