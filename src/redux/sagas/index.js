import API from "Api";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { APP_ACTIONS } from "redux/actions";
import { REDUCER_ACTION_CREATORS } from "redux/actions/actionCreators";
import { v4 as uuid } from "uuid";

function* fetchInitialTodos() {
  const result = yield call(API.fetchInitialTodosApi);
  const actionCreator = result.error
    ? REDUCER_ACTION_CREATORS.loadInitFailure
    : REDUCER_ACTION_CREATORS.loadInitSuccess;

  if (!result.error) {
    // convert fake posts data into todo data
    result.data = result.data.map(post => {
      return {
        id: uuid(),
        content: post.body,
        isComplete: Math.random() > 0.5
      };
    });
  }
  yield put(actionCreator(result.data));
}

function* watchInitialLoad() {
  yield takeLatest(APP_ACTIONS.INITAL_LOAD_REQUEST, fetchInitialTodos);
}

function* addTodo(action) {
  const result = yield call(API.addTodoApi, action.payload);
  const actionCreator = result.error
    ? REDUCER_ACTION_CREATORS.updateTodoFailure
    : REDUCER_ACTION_CREATORS.addTodoSuccess;
  // jsonplaceholder would always return id:101, workaround that
  if (!result.error) {
    result.data.id = uuid();
  }
  yield put(actionCreator(result.data));
}

function* watchAddTodo() {
  yield takeLatest(APP_ACTIONS.ADD_TODO_REQUEST, addTodo);
}

function* toggleTodo(action) {
  const result = yield call(API.toggleTodoApi, action.payload);
  const actionCreator = result.error
    ? REDUCER_ACTION_CREATORS.updateTodoFailure
    : REDUCER_ACTION_CREATORS.toggleTodoSuccess;
  yield put(actionCreator(result.data));
}

function* watchToggleTodo() {
  yield takeLatest(APP_ACTIONS.TOGGLE_TODO_REQUEST, toggleTodo);
}

function* removeTodo(action) {
  const result = yield call(API.removeTodoApi, action.payload);
  const actionCreator = result.error
    ? REDUCER_ACTION_CREATORS.updateTodoFailure
    : REDUCER_ACTION_CREATORS.removeTodoSuccess;
  yield put(actionCreator(action.payload));
}

function* watchRemoveTodo() {
  yield takeLatest(APP_ACTIONS.REMOVE_TODO_REQUEST, removeTodo);
}

function* ackFailure(action) {
  yield put(REDUCER_ACTION_CREATORS.userAckFailure(action));
}

function* watchAckFailure() {
  yield takeLatest(APP_ACTIONS.ACKNOWLEDGE_UPDATE_FAILURE, ackFailure);
}

export default function* rootSaga() {
  yield fork(watchInitialLoad);
  yield fork(watchAddTodo);
  yield fork(watchToggleTodo);
  yield fork(watchRemoveTodo);
  yield fork(watchAckFailure);
}
