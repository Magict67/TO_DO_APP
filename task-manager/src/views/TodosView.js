import React from 'react';
// 💡 FIX: Import the new TodoInput component
import TodoInput from '../components/TodoInput'; 
// We will add the TodoList component here in a later step

const TodosView = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Task List (Todos)</h2>
      <p>This is where the todo list functionality will go.</p>

      {/* 💡 FIX: Render the TodoInput Component */}
      <TodoInput /> 

      {/* TodoList will be rendered here later */}
    </div>
  );
};

export default TodosView;