import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Home from "./components/Home";
import Main from "./components/Main";
import SpecificProfileViewer from "./components/SpecificProfileViewer";
import home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <home>
      <Routes>
        {<Route path="/" element={<Home />}></Route>}
        {<Route path="/:id" element={<Main />} />}
        {
          <Route
            path="/:SpecificProfile/:id"
            element={<SpecificProfileViewer />}
          />
        }
      </Routes>
      </home>
    </BrowserRouter>
  );
}

export default App;
