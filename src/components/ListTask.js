import React from "react";

const ListTask = ({ task }) => {
  return (
    <div>
      <div>
        {task.title}
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ListTask;
