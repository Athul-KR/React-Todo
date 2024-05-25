import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

const Todo = () => {
  const [tasks, setTasks] = useState([
    // { title: "Learn HTML" },
    // { title: "Learn HL" },
    // { title: "Learn HML" },
  ]);
  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };
  return (
    <div>
      <div>
        <h1>TODO</h1>
      </div>
      <div>
        <AddTask addTask={addTask} />
      </div>
      <div>
        {tasks.map((task) => (
          <ListTask task={task} /> //Props aay passing task values
        ))}
      </div>
    </div>
  );
};

export default Todo;
