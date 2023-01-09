import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote, INoteCreate, INoteUpdate } from "../../interfaces/note";
import { randomUUID } from "../../utils";
import Fetcher from "../../lib/fetcher";

const initialState: INote[] = [];
const baseUrl = process.env.REACT_APP_SERVER_URL;

export const fetchNotes = createAsyncThunk(
  "notes/fetchAsync",
  async (thunkApi) => {
    return await Fetcher.get<INote[]>(`${baseUrl}/api/Note`);
  }
);

export const createNote = createAsyncThunk(
  "notes/createAsync",
  async (note: INoteCreate, thunkApi) => {
    return await Fetcher.post<INoteCreate, INote>(`${baseUrl}/api/Note`, note);
  }
);

export const updateNote = createAsyncThunk(
  "notes/updateAsync",
  async ({ id, note }: { id: string; note: INoteUpdate }, thunkApi) => {
    await Fetcher.put<INoteUpdate, any>(`${baseUrl}/api/Note/${id}`, note);
    return await Fetcher.get<INote[]>(`${baseUrl}/api/Note`);
  }
);

export const removeNote = createAsyncThunk(
  "notes/removeAsync",
  async (id: string, thunkApi) => {
    await Fetcher.remove<any>(`${baseUrl}/api/Note/${id}`);
    return await Fetcher.get<INote[]>(`${baseUrl}/api/Note`);
  }
);

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
  extraReducers(builder) {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state = action.payload;
    });
    builder.addCase(createNote.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateNote.fulfilled, (state, action) => {
      state = action.payload;
    });
    builder.addCase(removeNote.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export const { create, update, remove } = notesSlice.actions;
export default notesSlice.reducer;
