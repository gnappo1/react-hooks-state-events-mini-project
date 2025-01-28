import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  //! NEVER SEND set functions around
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const removeTask = (index) => {
    setTasks(prevTasksArray => [...prevTasksArray.slice(0, index), ...prevTasksArray.slice(index + 1)])
  }

  const handleCategorySelection = (e) => setSelectedCategory(e.target.innerText)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleCategorySelection={handleCategorySelection}/>
      {/* <NewTaskForm /> */}
      <TaskList tasks={tasks} removeTask={removeTask} selectedCategory={selectedCategory}/>
    </div>
  );
}

export default App;
