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
        break;
      case REDUCER_ACTIONS.INITAL_LOAD_FAILURE:
        break;
      case REDUCER_ACTIONS.ADD_TODO_SUCCESS:
        break;
      case REDUCER_ACTIONS.TOGGLE_TODO_SUCCESS:
        break;
      case REDUCER_ACTIONS.REMOVE_TODO_SUCCESS:
        break;
      // gather all crud operation failures except read is dif
      case REDUCER_ACTIONS.UPDATE_TODO_FAILURE:
        break;
      default:
        break;
    }
  });
}
