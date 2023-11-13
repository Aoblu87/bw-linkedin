import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Profile from "./Profile/Profile";

export default function Main() {
  return (
    <Container className="mt-5">
      <Row className="g-0 p-5">
        <Profile />
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
    </Container>
  );
}
