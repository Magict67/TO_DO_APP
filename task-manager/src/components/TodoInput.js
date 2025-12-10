import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const TodoInput = () => {
  // Controlled component state for the input field
  const [input, setInput] = useState('');
  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();

    if (text) {
      // Dispatch the addTodo action with the new task text
      dispatch(addTodo(text));
      // Clear the input field
      setInput(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <input
        type="text"
        placeholder="Add new community task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', marginRight: '10px', width: '300px', border: '1px solid #ddd' }}
      />
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
        Add Task
      </button>
    </form>
  );
};

export default TodoInput;