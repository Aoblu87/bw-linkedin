import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Profile from "./Profile/Profile";
import Sidebar from "./Sidebar/Sidebar";

export default function Main() {
  return (
    <Row className="g-0 p-5">
      <Col className="col-md-8 d-flex flex-column">
        <Profile />
      </Col>

      <Card className="col-3 justify-content-center">
        <h5 className="mt-4 ms-4 ">Persone che potresti conoscere</h5>
        <Sidebar />
        <hr />
        <h5 className="text-muted align-self-center">Mostra tutto</h5>
      </Card>
    </Row>
  );
}
