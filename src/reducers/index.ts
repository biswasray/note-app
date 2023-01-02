import { combineReducers } from "redux";
import { alertReducer } from "./alert";
import { noteReducer } from "./note";

const rootReducer = combineReducers({
  noteReducer,
  alertReducer,
});

export default rootReducer;
