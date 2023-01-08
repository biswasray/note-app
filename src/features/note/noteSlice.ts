import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote, INoteCreate, INoteUpdate } from "../../interfaces/note";
import { randomUUID } from "../../utils";

const initialState: INote[] = [];
export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    create(
      state: INote[],
      action: PayloadAction<{ note: INoteCreate }>
    ): INote[] {
      const { title = "no title", body = "" } = action.payload.note;
      let note = {
        id: randomUUID(),
        title,
        body,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      return [...state, note];
    },
    update(
      state: INote[],
      action: PayloadAction<{ id: string; note: INoteUpdate }>
    ): INote[] {
      return state.map((i) =>
        i.id === action.payload.id
          ? { ...i, ...action.payload.note, updatedAt: new Date() }
          : i
      );
    },
    remove(state: INote[], action: PayloadAction<{ id: string }>) {
      return state.filter((i) => i.id !== action.payload.id);
    },
  },
});

export const { create, update, remove } = notesSlice.actions;
export default notesSlice.reducer;
