import { ACTIONS } from "../constants/note";
import { INoteCreate, INoteUpdate } from "../interfaces/note";
export interface INoteAction {
  type: string;
  payload?: { note?: INoteUpdate; id?: string };
}

export class NoteAction {
  static create(note: INoteCreate): INoteAction {
    return {
      type: ACTIONS.CREATE,
      payload: {
        note,
      },
    };
  }
  static getAll(): INoteAction {
    return {
      type: ACTIONS.GET_ALL,
    };
  }
  static get(id: string): INoteAction {
    return {
      type: ACTIONS.GET,
      payload: {
        id,
      },
    };
  }
  static update(id: string, note: INoteUpdate): INoteAction {
    return {
      type: ACTIONS.UPDATE,
      payload: {
        id,
        note,
      },
    };
  }
  static remove(id: string): INoteAction {
    return {
      type: ACTIONS.DELETE,
      payload: {
        id,
      },
    };
  }
}
