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
      {/* al posto del codice che ho messo qui sotto puoi aggiungere il componente con un file jsx a parte per la sidebar*/}
      <Card className="col-3 justify-content-center">
      <h5 className="mt-2 ms-2 ">Altri profili consultati</h5>
        <Sidebar />
      </Card>
    </Row>
  );
}
