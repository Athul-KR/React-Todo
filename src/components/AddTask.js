import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const addItem = () => {
    addTask(value);
    setValue("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
};

export default AddTask;
