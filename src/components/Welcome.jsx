import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";

function Welcome(props) {
  const { user, setUser } = props;
  return (
    <>
      <Container className="mt-5">
        <Row className="g-0 p-5">
          <Homepage user={user} setUser={setUser} />
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Welcome;
