import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import SpecificProfileViewer from "./components/SpecificProfileViewer";
import Welcome from "./components/Welcome";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Welcome user={user} setUser={setUser} />}
        ></Route>
        <Route path="/:id" element={<Main user={user} setUser={setUser} />} />

        <Route
          path="/:SpecificProfile/:id"
          element={<SpecificProfileViewer />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
