import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "redux/reducers";
import rootSaga from "redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const enhancedMiddlewares = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, enhancedMiddlewares);

sagaMiddleware.run(rootSaga);

export default store;
