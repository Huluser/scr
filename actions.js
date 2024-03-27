export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const REORDER_TASKS = 'REORDER_TASKS';

export const addTask = (title, description) => ({
  type: ADD_TASK,
  payload: { title, description }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});

export const reorderTasks = (startIndex, endIndex) => ({
  type: REORDER_TASKS,
  payload: { startIndex, endIndex }
});
