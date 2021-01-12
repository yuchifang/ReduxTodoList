import { CHANGE_INPUT, ADD_LIST, DELETE_LIST, GET_INIT_LIST } from "./actionTypes"
import axios from "axios"

export const changeInputAction = (value: string) => ({
    type: CHANGE_INPUT,
    value: value
})

export const addListAction = (value: string) => ({
    type: ADD_LIST,
    value: value
})

export const deleteListAction = (id: number) => ({
    type: DELETE_LIST,
    value: id
})

export const getInitListAction = (data: any) => ({
    type: GET_INIT_LIST,
    value: data
})

export const getDataAction = () => {

    return (dispatch: any) => {
        axios.get("http://localhost:3000/list").then((res) => {
            console.log("33333333333333333")
            const data = res.data
            const action = getInitListAction(data)
            dispatch(action)
        }).catch((res) => {
            console.log("res", res)
        })
    }

}
