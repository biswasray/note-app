import { IAlertAction } from "../actions/alert";
import { ACTIONS } from "../constants/alert";
import { IAlert } from "../interfaces/alert";

const initialState: IAlert = {
  body: "Nothing",
  variant: "success",
  timeout: 1000,
};

export const alertReducer = (state = initialState, action: IAlertAction) => {
  switch (action.type) {
    case ACTIONS.SHOW:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
