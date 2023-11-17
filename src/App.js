import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import SpecificProfileViewer from "./components/SpecificProfileViewer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Profile/>}></Route> */}
        <Route path="/:id" element={<Main />} />
        {/* <Route
          path="/:SpecificProfile/:id"
          element={<SpecificProfileViewer />}
        /> */}
      </Routes>


    </BrowserRouter>
  );
}

export default App;
