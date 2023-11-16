import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Profile from "./Profile/Profile";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

export default function Main() {
  const [endpoint, setEndpoint] = useState(
    "https://striveschool-api.herokuapp.com/api/profile/me"
  );
  console.log(setEndpoint);
  return (
    <Row className="g-0 p-5">
      <Col className="col-md-8 d-flex flex-column">
        <Profile endpoint={endpoint} setEndpoint={setEndpoint} />
      </Col>
      {/* al posto del codice che ho messo qui sotto puoi aggiungere il componente con un file jsx a parte per la sidebar*/}
      <Card className="col-3 justify-content-center">
        <h5 className="mt-4 ms-4 ">Persone che potresti conoscere</h5>
        <Sidebar endpoint={endpoint} setEndpoint={setEndpoint} />
        <hr />
        <h5 className="text-muted align-self-center">Mostra tutto</h5>
      </Card>
    </Row>
  );
}
