import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./hooks";
import { INote } from "./interfaces/note";
import CreateScreen from "./screens/CreateScreen";
import DefaultScreen from "./screens/DefaultScreen";
import HomeScreen from "./screens/HomeScreen";
import NoteScreen from "./screens/NoteScreen";
import { RootState } from "./store";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}>
            <Route index element={<DefaultScreen />} />
            <Route path="create" element={<CreateScreen />} />
            <Route path="note/:id" element={<NoteScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
