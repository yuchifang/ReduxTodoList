import axios from "axios"
import { takeEvery, put } from "redux-saga/effects"
import { CALL_SAGA } from "./actionTypes"
import { getAioxsDataAction } from "./actionCreateors"
//generator
function* mySaga() {

    yield takeEvery(CALL_SAGA, getAxiosList)
}
function* getAxiosList() {
    const res = yield axios.get("http://localhost:3000/list")
    const action = getAioxsDataAction(res.data)
    yield put(action)
    // axios.get("http://localhost:3000/list")
    //     .then(res => {
    //         const data = res.data
    //         const action = getInitListAction(data)
    //         put(action)
    //     })
}
export default mySaga