import API from "Api";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { APP_ACTIONS } from "redux/actions";
import { REDUCER_ACTION_CREATORS } from "redux/actions/actionCreators";

function* fetchInitialTodos() {
  const result = yield call(API.fetchInitialTodosApi);
  const actionCreator = result.error
    ? REDUCER_ACTION_CREATORS.loadInitFailure
    : REDUCER_ACTION_CREATORS.loadInitSuccess;
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
  yield put(actionCreator(result.data));
}

function* watchRemoveTodo() {
  yield takeLatest(APP_ACTIONS.REMOVE_TODO_REQUEST, removeTodo);
}

export default function* rootSaga() {
  yield fork(watchInitialLoad);
  yield fork(watchAddTodo);
  yield fork(watchToggleTodo);
  yield fork(watchRemoveTodo);
}
