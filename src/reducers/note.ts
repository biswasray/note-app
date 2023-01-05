import { INoteAction } from "../actions/note";
import { ACTIONS } from "../constants/note";
import { INote } from "../interfaces/note";
import { randomUUID } from "../utils";

const initialState: INote[] = [];

export const noteReducer = (state = initialState, action: INoteAction) => {
  switch (action.type) {
    case ACTIONS.LOAD:
      return action.payload?.notes || [];
    case ACTIONS.CREATE:
      // const { title = "no title", body = "" } = action.payload?.note as INote;
      // let temp = {
      //   id: randomUUID(),
      //   title,
      //   body,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // };
      if (!action.payload?.note) {
        return state;
      }
      return [...state, action.payload.note];
    case ACTIONS.GET_ALL:
      return state;
    case ACTIONS.GET:
      const note = state.find((i) => i.id === action.payload?.id);
      return note ? [note] : [];
    case ACTIONS.UPDATE:
      return state.map((i) =>
        i.id === action.payload?.id
          ? { ...i, ...action.payload?.note, updatedAt: new Date() }
          : i
      );
    case ACTIONS.DELETE:
      return state.filter((i) => i.id !== action.payload?.id);
    default:
      return state;
  }
};
