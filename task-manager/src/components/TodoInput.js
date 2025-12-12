import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const TodoInput = () => {
  // Control comp state for input field
  const [input, setInput] = useState('');
  // Hook for dispatch actions to Redux store
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();

    if (text) {
      // Dispatch addTodo action with task text
      dispatch(addTodo(text));
      // Clear input field
      setInput(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '10px', border: '1px solid #cec3c3ff', borderRadius: '5px' }}>
      <input
        type="text"
        placeholder="Add new community task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', marginRight: '10px', width: '300px', border: '1px solid #e3d2d2ff' }}
      />
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#4dc751ff', color: 'white', border: 'none', cursor: 'pointer' }}>
        Add Task
      </button>
    </form>
  );
};

export default TodoInput;