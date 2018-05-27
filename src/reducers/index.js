import { combineReducers } from "redux";
import tasksReducer from "../actions/reducer";

const rootReducer = combineReducers({ tasksReducer });

export default rootReducer;
