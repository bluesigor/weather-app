import React, { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const incrementByOne = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <button onClick={incrementByOne}>Count {counter}</button>
    </div>
  );
};

export default ClickCounter;
