import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import Footer from "./Footer/Footer";

import MyNavbar from "./MyNavbar/MyNavbar";
import Profile from "./Profile/Profile";
import Sidebar from "./Sidebar/Sidebar";

function Main() {
  return (
    <>
      <MyNavbar />
      <Container className="mt-5">
        <Row className="g-0 p-5">
          <Profile />
          <Sidebar />
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Main;
