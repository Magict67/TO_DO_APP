import React from 'react';
import TodoInput from '../components/TodoInput'; 
import TodoList from '../components/TodoList'; 

const TodosView = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Community Task Manager</h2>

      {/* div to use Side-by-Side CSS */}
      <div className="todo-container">
        
        <div className="input-section">
          <h3>Add New Task</h3>
          <TodoInput /> 
        </div>

        <div className="list-section">
          <h3>Current Tasks</h3>
          <TodoList /> 
        </div>

      </div>
    </div>
  );
};

export default TodosView;