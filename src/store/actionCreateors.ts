import { CHANGE_INPUT, ADD_LIST, GET_SAGA_LIST, DELETE_LIST, GET_INIT_LIST } from "./actionTypes"
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

export const geyMyListAction = () => ({
    type: GET_SAGA_LIST,
})