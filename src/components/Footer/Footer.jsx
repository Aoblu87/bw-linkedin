import cn from "classnames";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./styles.module.scss";
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
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Card.Body>
      </Card>
    </Row>
  );
}
