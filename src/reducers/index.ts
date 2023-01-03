import { combineReducers } from "redux";
import { alertReducer } from "./alert";
import { noteReducer } from "./note";

const rootReducer = combineReducers({
  notes: noteReducer,
  alert: alertReducer,
});

export default rootReducer;
