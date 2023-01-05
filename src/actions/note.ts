import { ACTIONS } from "../constants/note";
import { INote, INoteCreate, INoteUpdate } from "../interfaces/note";
import { AsyncAction } from "../store";
import Fetcher from "../lib/fetcher";
export interface INoteAction {
  type: string;
  payload?: { note?: INote; id?: string; notes?: INote[] };
}

export class NoteAction {
  static baseUrl = process.env.REACT_APP_SERVER_URL;
  static load(notes: INote[]): INoteAction {
    return {
      type: ACTIONS.LOAD,
      payload: {
        notes,
      },
    };
  }
  static fetchAsync: () => AsyncAction = () => async (dispatch) => {
    const result = await Fetcher.get<INote[]>(`${this.baseUrl}/api/Note`);
    return dispatch(this.load(result));
  };
  static create(note: INote): INoteAction {
    return {
      type: ACTIONS.CREATE,
      payload: {
        note,
      },
    };
  }
  static createAsync: (note: INoteCreate) => AsyncAction =
    (note) => async (dispatch) => {
      const result = await Fetcher.post<INoteCreate, INote>(
        `${this.baseUrl}/api/Note`,
        note
      );
      return dispatch(this.create(result));
    };
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
  static update(id: string, note: INote): INoteAction {
    return {
      type: ACTIONS.UPDATE,
      payload: {
        id,
        note,
      },
    };
  }
  static updateAsync: (id: string, note: INoteUpdate) => AsyncAction =
    (id, note) => async (dispatch) => {
      await Fetcher.put<INoteUpdate, any>(
        `${this.baseUrl}/api/Note/${id}`,
        note
      );
      const result = await Fetcher.get<INote[]>(`${this.baseUrl}/api/Note`);
      return dispatch(this.load(result));
    };
  static remove(id: string): INoteAction {
    return {
      type: ACTIONS.DELETE,
      payload: {
        id,
      },
    };
  }
  static removeAsync: (id: string) => AsyncAction =
    (id) => async (dispatch) => {
      await Fetcher.remove<any>(`${this.baseUrl}/api/Note/${id}`);
      const result = await Fetcher.get<INote[]>(`${this.baseUrl}/api/Note`);
      return dispatch(this.load(result));
    };
}
