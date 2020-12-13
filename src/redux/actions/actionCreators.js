import { APP_ACTIONS, REDUCER_ACTIONS } from "redux/actions";

export const APP_ACTION_CREATORS = {
  requestInitLoad() {
    return {
      type: APP_ACTIONS.INITAL_LOAD_REQUEST
    };
  },
  requestAddTodo(todo) {
    return {
      type: APP_ACTIONS.ADD_TODO_REQUEST,
      payload: todo
    };
  },
  requestToggleTodo(todo) {
    return {
      type: APP_ACTIONS.TOGGLE_TODO_REQUEST,
      payload: todo
    };
  },
  requestRemoveTodo(todoId) {
    return {
      type: APP_ACTIONS.REMOVE_TODO_REQUEST,
      payload: todoId
    };
  },
  ackFailure() {
    return {
      type: APP_ACTIONS.ACKNOWLEDGE_UPDATE_FAILURE
    };
  }
};

// REDUCER ACTION CREATORS
export const REDUCER_ACTION_CREATORS = {
  loadInitSuccess(todos) {
    return {
      type: REDUCER_ACTIONS.INITAL_LOAD_SUCCESS,
      payload: todos
    };
  },

  loadInitFailure() {
    return {
      type: REDUCER_ACTIONS.INITAL_LOAD_FAILURE
    };
  },

  initiateUpdateTodo() {
    return {
      type: REDUCER_ACTIONS.INITIATE_UPDATE_TODO
    };
  },

  addTodoSuccess(todo) {
    return {
      type: REDUCER_ACTIONS.ADD_TODO_SUCCESS,
      payload: todo
    };
  },

  toggleTodoSuccess(todo) {
    return {
      type: REDUCER_ACTIONS.TOGGLE_TODO_SUCCESS,
      payload: todo
    };
  },
  toggleTodoFailure(todo) {
    return {
      type: REDUCER_ACTIONS.TOGGLE_TODO_FAILURE,
      payload: todo
    };
  },

  removeTodoSuccess(todoId) {
    return {
      type: REDUCER_ACTIONS.REMOVE_TODO_SUCCESS,
      payload: todoId
    };
  },

  updateTodoFailure() {
    return {
      type: REDUCER_ACTIONS.UPDATE_TODO_FAILURE
    };
  },
  userAckFailure() {
    return {
      type: REDUCER_ACTIONS.USER_CONFIRMS_UPDATE_FAILURE
    };
  }
};
