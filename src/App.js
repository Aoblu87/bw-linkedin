import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Main from "./components/Main";
import SpecificProfileViewer from "./components/SpecificProfileViewer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {<Route path="/" element={<Main />}></Route>}
        {<Route path="/:id" element={<SpecificProfileViewer />} />}
        {
          <Route
            path="/:SpecificProfile/:id"
            element={<SpecificProfileViewer />}
          />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
