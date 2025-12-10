// Define unique action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

// Action Creator for adding a new task
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(), // Use current timestamp for a unique ID
    text,
    completed: false,
  },
});

// Action Creator for toggling a task's completion status
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

// Action Creator for deleting a task
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});