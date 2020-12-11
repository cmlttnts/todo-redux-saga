import produce from "immer";
import ACTIONS from "redux/actions";

const INIT_STATE = {
  todos: [],
  error: null
};

export default function rootReducer(state = INIT_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case ACTIONS.INITAL_LOAD_SUCCESS:
        break;
      case ACTIONS.INITAL_LOAD_FAILURE:
        break;
      case ACTIONS.ADD_TODO_SUCCESS:
        break;
      case ACTIONS.TOGGLE_TODO_SUCCESS:
        break;
      case ACTIONS.REMOVE_TODO_SUCCESS:
        break;
      // gather all crud operation failures except read is dif
      case ACTIONS.UPDATE_TODO_FAILURE:
        break;

      default:
        break;
    }
  });
}
