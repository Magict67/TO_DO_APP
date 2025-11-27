import React from 'react';

//  receive 'text' and 'completed'parent
const TodoItem = ({ text, completed }) => {
  return (
    <li style={{
      textDecoration: completed ? 'line-through' : 'none',
      padding: '10px',
      borderBottom: '1px solid #eee'
    }}>
    </li>
  );
};