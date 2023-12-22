import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Main from "./components/Main";
import SpecificProfileViewer from "./components/SpecificProfileViewer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Home /> */}
      <Routes>
        {/* <Route path="/login" element={<Home />}></Route> */}
        <Route path="/" element={<Main />}></Route>
        <Route path="/:id" element={<SpecificProfileViewer />}></Route>

        <Route
          path="/:SpecificProfile/:id"
          element={<SpecificProfileViewer />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
