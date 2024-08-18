import React from "react";

function Task({ task, dataPassedBack }) {
  function handleDelete() {
    dataPassedBack(task.text);
  }
  
  return (
    <div className="task">
      <div className="text">{task.text}</div>
      <div className="category">{task.category}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
