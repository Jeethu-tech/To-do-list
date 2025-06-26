import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask === "") {
      alert("Please enter a task.");
      return;
    }

    setTasks([...tasks, trimmedTask]);
    setTask("");
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">To-Do List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTask}>
          ADD
        </button>
      </div>

      <ul className="list-group" id="new-task">
        {tasks.length === 0 ? (
          <li className="list-group-item text-center text-muted">
            No tasks added yet.
          </li>
        ) : (
          tasks.map((t, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{t}</span>
              <div>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditTask(index)}
                  title="Edit Task"
                >
                  ✏️
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteTask(index)}
                  title="Delete Task"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;

