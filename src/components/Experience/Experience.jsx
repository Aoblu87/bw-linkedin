import { Col, Figure, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function Experience() {
  return (
    <Card className="rounded-3 me-4 mb-2">
      <Card.Body className="d-flex flex-column ">
        <Row>
          <Card.Title>
            <h4 className="fw-bolder mt-2">Esperienza</h4>
          </Card.Title>
        </Row>
        <Row>
          <Figure className="col-2">
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="holder.js/171x180"
            />
          </Figure>
          <Col>
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
            </Card.Text>
            <Card.Text className="fs-6  text-secondary ">
              348 collegamenti
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
