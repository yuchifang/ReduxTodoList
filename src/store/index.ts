import { createStore, applyMiddleware } from "redux"
import reducer from "./reducer"
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import mySagas from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(mySagas)
export default store;