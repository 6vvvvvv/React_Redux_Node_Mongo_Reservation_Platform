import accReducer from "./Account/reducer/accReducer"
import todoReducer from "./Todo/reducer/todoReducer"
import { combineReducers } from "redux"

export default combineReducers({
    todoReducer,
    accReducer
})