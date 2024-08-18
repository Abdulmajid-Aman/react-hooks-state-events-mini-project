import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function onTaskFormSubmit(newTask) {
    setTasks(prev => {
      if (newTask) {
        return [...prev, newTask];
      }
      return prev;
    });
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  function dataPassedBack(taskText) {
    setTasks(prevTasks => prevTasks.filter(task => task.text !== taskText));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks}
        dataPassedBack={dataPassedBack}
      />
    </div>
  );
}

export default App;
