import React from "react";

const CounterB = props => {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return props.counter === 0 ? "Zero" : props.counter;
  };

  return (
    <div className="counterB">
      {props.children}
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={props.onIncrement}
        className="button btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default CounterB;
