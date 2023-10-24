export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload: payload,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
}
