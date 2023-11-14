import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Experience from "./Experience/Experience";
import Profile from "./Profile/Profile";
import { useEffect, useState } from "react";

export default function Main() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization: process.env.REACT_APP_MY_TOKEN,
      },
    })
      .then((r) => r.json())
      .then(setProfile);
  }, []);
  return (
    <Row className="g-0 p-5">
      <Col className="col-md-8 d-flex flex-column">
        <Profile profile={profile} setProfile={setProfile} />
        <Experience profile={profile} setProfile={setProfile} />
      </Col>
      {/* al posto del codice che ho messo qui sotto puoi aggiungere il componente con un file jsx a parte per la sidebar*/}
      <Card className="col-3">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Row>
  );
}
