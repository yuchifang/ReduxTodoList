import { createStore } from "redux"
import reducer from "./reduce"
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
    reducer,
    composeWithDevTools()
)
export default store;