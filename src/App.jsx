import { useState, useEffect } from 'react';
import Taskform from './components/Taskform';
import TaskList from './components/Tasklist';
import Progresstracker from './components/Progresstracker';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
   const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update task completion status
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <header>
        <h1>TaskMan</h1>
        <p>Your friendly Task Manager</p>
      </header>

        <Taskform addTask={addTask} />

        <TaskList 
            tasks={tasks} 
            toggleComplete={toggleComplete}
            updateTask={updateTask} 
            deleteTask={deleteTask} 
        />
        <Progresstracker tasks={tasks} />

        {tasks.length > 0 && (
          <button className="clear" onClick={clearTasks}>
            Clear All Tasks
          </button>
        )}
    </div>
  );
}
