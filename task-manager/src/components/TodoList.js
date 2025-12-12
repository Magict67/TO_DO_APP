import React from 'react';
import { useSelector } from 'react-redux'; // Hook to read state from Redux
import TodoItem from './TodoItem'; // Import the item component

const TodoList = () => {
  // useSelector reads 'todos' array from Redux store
  // set state slice name to 'tasks' in rootReducer (state.tasks.todos)
  const todos = useSelector(state => state.tasks.todos); 

  // If list empty, show silly message
  if (todos.length === 0) {
    return (
      <p style={{ marginTop: '30px', fontSize: '1.2em', color: '#555' }}>
        Yippie! No tasks! Mr. Snuffleupagus has left the building! Add another below
      </p>
    );
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, width: '500px', margin: '20px auto', textAlign: 'left' }}>
      {/* Map over the tasks and make TodoItem for each one */}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;