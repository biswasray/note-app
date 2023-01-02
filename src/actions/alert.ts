import { ACTIONS } from "../constants/alert";
import { IAlert } from "../interfaces/alert";

export interface IAlertAction {
  type: string;
  payload: IAlert;
}

export class AlertAction {
  static show(alertData: IAlert): IAlertAction {
    return {
      type: ACTIONS.SHOW,
      payload: alertData,
    };
  }
}
