import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
