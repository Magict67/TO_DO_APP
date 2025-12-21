import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/todoActions';

const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL' //  new line for vis filter
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload], // Add new task to the array
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed } // Flip the completed status
            : todo
        ),
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload), // Remove task by ID
      };

      case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.payload
      };

    default:
      return state;
  }
};

export default todoReducer;