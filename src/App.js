import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./App.scss";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SpecificProfileViewer from "./components/SpecificProfileViewer";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Profile/>}></Route> */}
        <Route path="/" element={<Main />} />
        <Route
          path="/:SpecificProfile/:id"
          element={<SpecificProfileViewer />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
