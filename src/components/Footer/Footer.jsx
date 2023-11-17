import cn from "classnames";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
import { QuestionCircleFill } from "react-bootstrap-icons";
export default function Footer() {
  return (
    <Row className="p-5">
      <Card className={cn("border-0", styles.card)}>
        <Card.Body className="d-flex flex-row">
          <Col className="d-flex flex-column">
            <a
              className="text-dark fw-bolder link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Informazioni
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Linee guida della community
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Privacy e condizioni
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Sales solutions
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Centro sicurezza
            </a>
          </Col>
          <Col className="d-flex flex-column">
            <a
              className="text-dark fw-bolder link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Accessibilità
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Carriera
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Opzioni per gli annunci pubblicitari
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Mobile
            </a>
          </Col>
          <Col xs={2} className="d-flex flex-column">
            <a
              className="text-dark fw-bolder link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Talent Solutions
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Soluzioni di marketing
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Pubblicità
            </a>
            <a
              className="text-dark link-primary fw-bolder link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="/"
            >
              Piccole imprese
            </a>
          </Col>
          <Col className="d-flex flex-column">
            <Col className="d-flex flex-row">
              <Col>
                <QuestionCircleFill />
              </Col>
              <Col>
                <a
                  className="text-dark fw-bolder link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  href="/"
                >
                  Domande
                </a>
                <p className="fs-6">Visita il nostro centro assistenza</p>
              </Col>
            </Col>
            <Col>
              <a
                className="text-dark fw-bolder link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="/"
              >
                Talent Solutions
              </a>
            </Col>
            <Col>
              <a
                className="text-dark fw-bolder link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="/"
              >
                Talent Solutions
              </a>
            </Col>
          </Col>
        </Card.Body>
      </Card>
    </Row>
  );
}
