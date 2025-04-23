import React, { useState } from 'react';

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a new task"
        className="todo-input"
      />
      <button onClick={handleAddTask} className="add-task-btn">
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
