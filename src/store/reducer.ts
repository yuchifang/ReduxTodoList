import { changeInput, addList, deleteList } from "./actionType"
import { TodoListStateType, ActionType } from "../InterFace"

const defaultState: TodoListStateType = {
    inputValue: "Write Something",
    list: ["早餐", "運動", "午餐", "運動", "晚餐"]
}

export default (state = defaultState, action: ActionType) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) { //Reducer只能接收state
        case changeInput:
            newState.inputValue = action.value
            return newState
        case addList:
            newState.list = [...newState.list, action.value]
            newState.inputValue = ""
            return newState
        case deleteList:
            const filterState = newState.list.filter((list: string, index: number) => index !== action.value);
            newState.list = filterState
            return newState
    }
    return state
}