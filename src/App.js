import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Main from './components/Main';
import Footer from './components/Footer/Footer';
import { Container } from'react-bootstrap';

import MyNavbar from './components/MyNavbar/MyNavbar';


function App() {
  return (
    <>
    <MyNavbar />
    <Container className="mt-5">

<Main/>
<Footer/>
    </Container>
    </>
  );
}

export default App;
