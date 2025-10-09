import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer } from "./Auth/authReducer";
import { notesReducer } from "./Notes/notesReducer";
import rootSaga from "./saga.js";
const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
});

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
export default store;
sagaMiddleWare.run(rootSaga);
