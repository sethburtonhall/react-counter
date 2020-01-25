import React, { useState } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

const App = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 0
    },
    {
      id: 2,
      value: 0
    }
  ]);

  const handleReset = () => {
    const resetCounters = counters.map(counters => {
      counters.value = 0;
      return counters;
    });
    setCounters(resetCounters);
  };

  const handleIncrement = counter => {
    const addCounters = [...counters];
    const index = counters.indexOf(counter);
    addCounters[index] = { ...counter };
    addCounters[index].value++;
    setCounters(addCounters);
  };

  const handleDelete = counterId => {
    const newCounters = counters.filter(counters => counters.id !== counterId);
    setCounters(newCounters);
  };

  return (
    <div className="app">
      <NavBar totalCounters={counters.filter(counters => counters.value > 0).length} />
      <main className="container">
        <Counters
          counters={counters}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;