import { changeInput } from "./actionType"
import { TodoListStateType, ActionType } from "../InterFace"

const defaultState: TodoListStateType = {
    inputValue: "Write Something",
    list: ["早餐", "運動", "午餐", "運動", "晚餐"]
}

export default (state = defaultState, action: ActionType) => {
    switch (action.type) { //Reducer只能接收state
        case changeInput:
            let newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            console.log(state, action)
            return newState
    }
    return state
}