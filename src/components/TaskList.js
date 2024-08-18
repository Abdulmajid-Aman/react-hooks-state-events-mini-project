import React from "react";
import Task from "./Task";

function TaskList({ tasks, dataPassedBack }) {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task
          key={task.text}
          task={task}
          dataPassedBack={dataPassedBack}
        />
      ))}
    </div>
  );
}

export default TaskList;
