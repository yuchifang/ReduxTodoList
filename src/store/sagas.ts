import axios from "axios"
import { takeEvery, put } from "redux-saga/effects"
import { GET_SAGA_LIST } from "./actionTypes"
import { getInitListAction } from "./actionCreateors"
//generator
function* mySaga() {

    yield takeEvery(GET_SAGA_LIST, getList)
}
function* getList() {
    const res = yield axios.get("http://localhost:3000/list")
    const action = getInitListAction(res.data)
    yield put(action)
    // axios.get("http://localhost:3000/list")
    //     .then(res => {
    //         const data = res.data
    //         const action = getInitListAction(data)
    //         put(action)
    //     })
}
export default mySaga