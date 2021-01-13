import { CHANGE_INPUT, ADD_LIST, CALL_SAGA, DELETE_LIST, GET_INIT_LIST } from "./actionTypes"
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

export const getAioxsDataAction = (data: any) => ({
    type: GET_INIT_LIST,
    value: data
})

export const callSagaAction = () => ({
    type: CALL_SAGA,
})