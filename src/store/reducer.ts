import { CHANGE_INPUT, ADD_LIST, DELETE_LIST, GET_INIT_LIST } from "./actionTypes"
import { TodoListStoreType, ActionType } from "../InterFace"

const defaultState: TodoListStoreType = {
    inputValue: "Write Something",
    list: ["早餐", "運動", "午餐", "運動", "晚餐"]
}

export default (state = defaultState, action: ActionType) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) { //Reducer只能接收state
        case CHANGE_INPUT:
            newState.inputValue = action.value
            return newState
        case ADD_LIST:
            newState.list = [...newState.list, action.value]
            newState.inputValue = ""
            return newState
        case DELETE_LIST:
            const filterState = newState.list.filter((list: string, index: number) => index !== action.value);
            newState.list = filterState
            return newState
        case GET_INIT_LIST:
            newState.list = action.value;
            return newState
    }
    return state
}