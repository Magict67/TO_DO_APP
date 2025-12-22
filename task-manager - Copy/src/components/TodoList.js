import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Added useDispatch
import { toggleTodo, deleteTodo, setVisibilityFilter } from '../actions/todoActions'; // Added setVisibilityFilter
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  
  // 1. Get both todos AND current filter from Redux
  const todos = useSelector(state => state.tasks.todos);
  const activeFilter = useSelector(state => state.tasks.visibilityFilter);

  // 2. Logic to filter the tasks before display
  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  };

  const visibleTodos = getVisibleTodos(todos, activeFilter);

  return (
    <div>
      {/* 3. Filter Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_ALL'))} style={{ fontWeight: activeFilter === 'SHOW_ALL' ? 'bold' : 'normal' }}>All</button>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_ACTIVE'))} style={{ margin: '0 10px', fontWeight: activeFilter === 'SHOW_ACTIVE' ? 'bold' : 'normal' }}>Incomplete</button>
        <button onClick={() => dispatch(setVisibilityFilter('SHOW_COMPLETED'))} style={{ fontWeight: activeFilter === 'SHOW_COMPLETED' ? 'bold' : 'normal' }}>Completed</button>
      </div>

      {visibleTodos.length === 0 ? (
        <p>No tasks found for this filter!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
          {visibleTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;