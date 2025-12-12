import React from 'react';
import TodoInput from '../components/TodoInput'; 
// Import new list component
import TodoList from '../components/TodoList'; 

const TodosView = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Task List (Todos)</h2>

      {/* The input form for adding tasks */}
      <TodoInput /> 

      {/* 💡 FIX: The list display area */}
      <TodoList /> 

    </div>
  );
};

export default TodosView;