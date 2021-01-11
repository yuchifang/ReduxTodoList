import { CHANGE_INPUT, ADD_LIST, DELETE_LIST } from "./actionTypes"
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