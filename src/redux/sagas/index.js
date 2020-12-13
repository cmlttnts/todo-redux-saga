import API from "Api";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { APP_ACTIONS } from "redux/actions";
import { REDUCER_ACTION_CREATORS } from "redux/actions/actionCreators";
import { MS_TO_DAY, MS_TO_HOUR } from "utils";
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
        // assing random timestamp in the last hour
        createdAt: Date.now() - Math.random() * MS_TO_HOUR,
        content: post.body.slice(0, 50),
        isComplete: Math.random() > 0.5,
        // assing random timestamp on the next day
        deadline: Date.now() + Math.random() * MS_TO_DAY
      };
    });
  }
  yield put(actionCreator(result.data));
}

function* watchInitialLoad() {
  yield takeLatest(APP_ACTIONS.INITAL_LOAD_REQUEST, fetchInitialTodos);
}

function* addTodo(action) {
  yield put(REDUCER_ACTION_CREATORS.initiateUpdateTodo());
  const newAction = { ...action };
  newAction.payload = { ...action.payload, createdAt: Date.now(), isComplete: false };
  const result = yield call(API.addTodoApi, newAction.payload);
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
  // lets assume successful toggle first to increase reaction time
  yield put(REDUCER_ACTION_CREATORS.toggleTodoSuccess(action.payload));
  const result = yield call(API.toggleTodoApi, action.payload);
  if (result.error) {
    // in case of error, we can revert it
    yield put(REDUCER_ACTION_CREATORS.toggleTodoFailure(action.payload));
  }
}

function* watchToggleTodo() {
  yield takeLatest(APP_ACTIONS.TOGGLE_TODO_REQUEST, toggleTodo);
}

function* removeTodo(action) {
  yield put(REDUCER_ACTION_CREATORS.initiateUpdateTodo());
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
