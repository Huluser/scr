import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, REORDER_TASKS } from './actions';

const initialState = {
  tasks: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), ...action.payload }]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, completed: !task.completed } : task
        )
      };
    case REORDER_TASKS:
      const { startIndex, endIndex } = action.payload;
      const reorderedTasks = Array.from(state.tasks);
      const [removedTask] = reorderedTasks.splice(startIndex, 1);
      reorderedTasks.splice(endIndex, 0, removedTask);
      return {
        ...state,
        tasks: reorderedTasks
      };
    default:
      return state;
  }
};

export default reducer;
