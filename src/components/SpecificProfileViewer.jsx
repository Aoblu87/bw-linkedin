import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import Footer from "./Footer/Footer";

import MyNavbar from "./MyNavbar/MyNavbar";
import Sidebar from "./Sidebar/Sidebar";
import SpecificProfile from "./SpecificProfile/SpecificProfile";

function SpecificProfileViewer() {
  return (
    <>
      <MyNavbar />
      <Container className="mt-5">
        <Row className="g-0 p-xs-0 p-md-5">
          <SpecificProfile />
          <Sidebar />
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default SpecificProfileViewer;
