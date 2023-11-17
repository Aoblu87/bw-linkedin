import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import './App.scss';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/MyNavbar/MyNavbar';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import SpecificProfile from './components/SpecificProfile/SpecificProfile';


function App() {
  return (

<BrowserRouter>
    <MyNavbar />
    <Container className="mt-5">
    <Row className="g-0 p-5">
      <Profile/>
      <Sidebar/>
    <Routes>
      {/* <Route path="/" element={<Profile/>}></Route> */}
      <Route path = "/SpecificProfile/:id" element= {< SpecificProfile/>} />
    </Routes>
      </Row>
      <Footer/>
    </Container>

</BrowserRouter>


  );
}

export default App;
