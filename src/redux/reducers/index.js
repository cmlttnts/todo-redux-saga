import produce from "immer";
import { REDUCER_ACTIONS } from "redux/actions";

const INIT_STATE = {
  todos: [],
  errors: {
    init: false,
    update: false
  }
};

export default function rootReducer(state = INIT_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case REDUCER_ACTIONS.INITAL_LOAD_SUCCESS:
        draft.todos = action.payload;
        break;
      case REDUCER_ACTIONS.INITAL_LOAD_FAILURE:
        draft.errors.init = true;
        break;
      case REDUCER_ACTIONS.ADD_TODO_SUCCESS:
        draft.todos.push(action.payload);
        break;
      case REDUCER_ACTIONS.TOGGLE_TODO_SUCCESS:
        const toggledTodo = draft.todos.find(todo => todo.id === action.payload.id);
        if (toggledTodo) toggledTodo.isComplete = action.payload.isComplete;
        else console.error("Non-existing todo toggling attempt");
        break;
      case REDUCER_ACTIONS.REMOVE_TODO_SUCCESS:
        const removedTodoIndex = draft.todos.findIndex(todo => todo.id === action.payload);
        if (removedTodoIndex > -1) draft.todos.splice(removedTodoIndex, 1);
        else console.error("Non-existing todo removal attempt");
        break;
      // gather all crud operation failures except read
      case REDUCER_ACTIONS.UPDATE_TODO_FAILURE:
        draft.errors.update = true;
        break;
      case REDUCER_ACTIONS.USER_CONFIRMS_UPDATE_FAILURE:
        draft.errors.update = false;
        break;
      default:
        break;
    }
  });
}
