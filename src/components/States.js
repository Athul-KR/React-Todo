import React, { useState } from "react";

const States = ({ props }) => {
  const [counts, setAge] = useState(props);
  const handleCount = (id) => {
    const newValue = counts.map((count) =>
      count.id === id ? { ...count, age: count.age + 1 } : count
    );

    setAge(newValue);
  };

  return (
    <div>
      {counts.map((prop) => (
        <div key={props.id}>
          <p>{prop.name}</p>
          <p>{prop.age}</p>
          <button onClick={() => handleCount(prop.id)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default States;
