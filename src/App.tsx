import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateScreen from "./screens/CreateScreen";
import DefaultScreen from "./screens/DefaultScreen";
import HomeScreen from "./screens/HomeScreen";
import NoteScreen from "./screens/NoteScreen";

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
