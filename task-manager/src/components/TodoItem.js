import React from 'react';
import { useDispatch } from 'react-redux'; // add hook to send actions
import { toggleTodo, deleteTodo } from '../actions/todoActions'; // Import actions

// Rcv single todo object (id, text, completed)
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid #eee',
      fontSize: '1.1em',
      backgroundColor: todo.completed ? '#f0fff0' : 'white', // Visual cue
    }}>
      {/* Display task text */}
      <span 
        style={{ 
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
          flexGrow: 1, 
          color: todo.completed ? '#888' : '#333'
        }}
        // Click to Toggle completion status (CRUD)
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        {todo.text}
      </span>

      {/* Delete Button (CRUD - Delete) */}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        style={{
          padding: '5px 10px',
          backgroundColor: '#e74c3c', 
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          marginLeft: '10px'
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;