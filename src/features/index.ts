import { combineReducers } from "@reduxjs/toolkit";
import noteReducer from "./note/noteSlice";
import alertReducer from "./alert/alertSlice";

const rootReducer = combineReducers({
  notes: noteReducer,
  alert: alertReducer,
});

export default rootReducer;
