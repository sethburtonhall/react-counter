import React from "react";

const CounterA = props => {
  const { children, counter, onIncrement, onDelete } = props
  
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    return counter.value === 0 ? "Zero" : counter.value;
  };

  return (
    <div className="counterA">
      {children}
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="button btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default CounterA;
