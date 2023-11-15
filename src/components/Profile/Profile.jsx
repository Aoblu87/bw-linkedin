import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Dot, PersonPlusFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Profile() {
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
    <Card className="rounded-3 me-4 mb-2">
      <div
        className="rounded-top  position-relative"
        style={{
          backgroundColor: "#9FB4B7",
          height: "13.5rem",
          color: "green",
          width: "100%",
        }}
      ></div>
      <div
        className="rounded-circle border border-white border-4 position-absolute"
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "#E7E2DC",
          inset: "110px 0 0 25px",
        }}
      ></div>
      <Card.Body className="d-flex flex-row p-4">
        <Col>
          <Card.Title className="d-flex flex-row">
            <h4 className="fw-bolder mt-5 me-2">{profile.name}</h4>
            <h4 className="fw-bolder mt-5">{profile.surname}</h4>
          </Card.Title>
          <Card.Subtitle>{profile.title} - Università di Pisa</Card.Subtitle>
          <Card.Text className="fs-6  text-secondary mt-2 ">
            Firenze, Toscana, Italia
            <Dot />
            <Card.Link className="fw-bolder text-decoration-none ">
              Informazioni di contatto
            </Card.Link>
          </Card.Text>
          <Card.Text className="fs-6  text-secondary ">
            348 collegamenti
          </Card.Text>
          <Col className="mt-2">
            <Button
              className="fw-bold rounded-3 rounded-pill  me-2"
              variant="primary"
            >
              <PersonPlusFill />
              Collegati
            </Button>
            <Button
              className="fw-bold rounded-3 rounded-pill me-2"
              variant="outline-primary"
            >
              Messaggio
            </Button>
            <Button
              className="fw-bold rounded-3 rounded-pill"
              variant="outline-light text-secondary"
            >
              Altro
            </Button>
          </Col>
        </Col>
        <Col md={4} className="mt-5">
          <Card.Link className="fs-6 fw-bolder  text-dark ">
            Università di Pisa
          </Card.Link>
        </Col>
      </Card.Body>
    </Card>
  );
}
