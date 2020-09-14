import accReducer from "./Account/reducer/accReducer";
import todoReducer from "./Todo/reducer/todoReducer";
import actReducer from "./Activity/reducer/actReducer";
import { combineReducers } from "redux";

export default combineReducers({
  todoReducer,
  accReducer,
  actReducer,
});
