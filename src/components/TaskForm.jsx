
import React, { useState } from "react";
function TaskForm({ addTask }) {
  const [task, setTask] = useState(""); // For task name
  const [priority, setPriority] = useState("Medium"); // For task priority
  const [category, setCategory] = useState("General"); // For task category

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      console.log("Input value:", task); 
      // If the task is not empty, add it
    addTask({ task, priority, category, completed: false });

      // Reset the form
      setTask("");
      setPriority("Medium");
      setCategory(" General");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div id="vishnu">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          required
        />
        <span>
          <button type="submit">Add Task</button>
        </span>
      </div>

      <div id="bns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
}

export default TaskForm;