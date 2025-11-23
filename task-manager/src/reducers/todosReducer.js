// beginning tasks
const initialState = [
  { id: 1, text: 'Create wireframes', completed: true },
  { id: 2, text: 'Set up Redux store', completed: false },
  { id: 3, text: 'Build Contact Form', completed: false }
];
// data handler
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    // return created list
    default:
      return state;
  }
};

export default todosReducer;