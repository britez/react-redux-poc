// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_ALL = 'SHOW_ALL'
export const SHOW_COMPLETED = 'SHOW_COMPLETED'
export const SHOW_ACTIVE = 'SHOW_ACTIVE'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL: return todos;
    case SHOW_COMPLETED: return todos.filter(t => t.completed);
    case SHOW_ACTIVE: return todos.filter(t => !t.completed);
    default: return todos;
  }
}

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});


export const actions = {
  toggleTodo,
  getVisibleTodos
}

// ------------------------------------
// Reducer
// ------------------------------------
const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

  export function todos (state = [], action) {
    switch (action.type) {
      case ADD_TODO:
        return [ ...state, todo(undefined, action) ];
      case TOGGLE_TODO:
        return state.map(t => todo(t, action));
      default:
        return state;
    }
  };

export function visibilityFilter (state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
