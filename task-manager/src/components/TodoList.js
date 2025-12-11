import React from 'react';
import { useSelector } from 'react-redux'; // 💡 NEW: Hook to read state from Redux
import TodoItem from './TodoItem'; // 💡 NEW: Import the item component

const TodoList = () => {
  // Use useSelector to read the 'todos' array from the Redux store
  // We set the state slice name to 'tasks' in rootReducer (state.tasks.todos)
  const todos = useSelector(state => state.tasks.todos); 

  // If the list is empty, show a congratulatory message
  if (todos.length === 0) {
    return (
      <p style={{ marginTop: '30px', fontSize: '1.2em', color: '#555' }}>
        Hooray! No tasks to show. You can add one below!
      </p>
    );
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, width: '500px', margin: '20px auto', textAlign: 'left' }}>
      {/* Map over the tasks and render a TodoItem for each one */}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;