import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Profile() {
  return (
    <Card className="col-8 rounded-3 me-4">
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
          <Card.Title>
            <h4 className="fw-bolder mt-5">Mario Rossi</h4>
          </Card.Title>
          <Card.Subtitle>
            Associate Professor - Università di Pisa
          </Card.Subtitle>
          <Card.Text className="fs-6  text-secondary mt-2 ">
            Firenze, Toscana, Italia
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
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
              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-person-plus-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path
                  fill-rule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
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
