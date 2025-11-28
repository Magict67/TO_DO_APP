import React from 'react';
// import TodoItem component later.
// this is list holder.

const TodoList = ({ todos }) => {
  // receives list of tasks
  // called `todos`from parent container

  if (!todos || todos.length === 0) {
    // If empty, show message
    return <p>Hooray! No tasks to show. You can add one below!</p>;
  }

  // If tasks, loop through to display them.
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {/* Map over 'todos' array
        make <TodoItem /> for each! 
      */}
      {/* check if list is receiving data.
        See "Displaying 3 tasks" in browser, it's working!
      */}
      <p>Displaying {todos.length} tasks...</p>
    </ul>
  );
};

export default TodoList;