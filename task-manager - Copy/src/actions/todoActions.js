// unique action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// Action Creator add new task
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(), // current timestamp for a unique ID
    text,
    completed: false,
  },
});

// toggle task completion status
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

// AC for delete task
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter,
});