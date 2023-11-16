import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.scss';
import Footer from './components/Footer/Footer';
import Main from './components/Main';

import MyNavbar from './components/MyNavbar/MyNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

<BrowserRouter>
    <MyNavbar />
    <Container className="mt-5">

      <Main/>
      <Footer/>
    </Container>
    <Routes>
      <Route path = "/Main/:id" element= {<Main />} />
    </Routes>
</BrowserRouter>


  );
}

export default App;
