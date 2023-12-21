import { Container, Row, Button, Dropdown } from "react-bootstrap";
import {
  BellFill,
  BriefcaseFill,
  CaretDownFill,
  ChatDotsFill,
  Grid3x3GapFill,
  HouseDoorFill,
  Linkedin,
  PeopleFill,
  PersonCircle,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./styles.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={cn("bg-body-tertiary p-0", styles.prova)}
    >
      <Container>
        <Navbar.Brand href="#">
          <Linkedin className="text-primary fs-2 ms-5" />
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="me-2"
            aria-label="Search"
          />
        </Form>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto  my-lg-0">
            <Container
              className="col-lg-12"
              id="icone"
              style={{ borderRight: "1px solid rgb(119, 119, 119)" }}
            >
              <Row className="d-flex flex-row  justify-content-between">
                <Nav.Link
                  href="#action1"
                  className="d-flex flex-column align-items-center col-lg-2"
                >
                  <HouseDoorFill className="fs-5" />
                  <h6>Home</h6>
                </Nav.Link>
                <Nav.Link
                  href="#action2"
                  className="d-flex flex-column align-items-center col-lg-2"
                >
                  <PeopleFill className="fs-5" />
                  <h6>Rete</h6>
                </Nav.Link>
                <Nav.Link
                  href="#action3"
                  className="d-flex flex-column align-items-center col-lg-2"
                >
                  <BriefcaseFill className="fs-5" />
                  <h6>Lavoro</h6>
                </Nav.Link>
                <Nav.Link
                  href="#action4"
                  className="d-flex flex-column align-items-center col-lg-2"
                >
                  <ChatDotsFill className="fs-5" />
                  <h6>Messaggistica</h6>
                </Nav.Link>
                <Nav.Link
                  href="#action5"
                  className="d-flex flex-column align-items-center col-lg-2"
                >
                  <BellFill className="fs-5" />
                  <h6>Notifiche</h6>
                </Nav.Link>


                <Nav.Link
                  href="#action5"
                  className="d-flex flex-column align-items-center col-lg-2 p-0"
                >
                  <Dropdown>
                    <Dropdown.Toggle variant="link" id="dropdown-basic" classname="p-0">
                      <PersonCircle className="fs-5" />
                      <Container className="d-flex flex-row justify-content-center">
                        <h6>Tu</h6>

                      </Container>
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                      <Form>
                        <Form.Group className="my-3 mx-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="my-3 mx-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="my-3 mx-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="my-3 mx-3">
                          Submit
                        </Button>
                      </Form>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Link>


              </Row>
            </Container>
            <Nav.Link
              href="#action7"
              className="d-flex flex-column align-items-center col-lg-3"
            >
              <Grid3x3GapFill className="fs-5" />
              <Container className="d-flex flex-row justify-content-center">
                <h6 style={{ fontSize: "8px" }}>Per le aziende</h6>
                <CaretDownFill className="fs-6" />
              </Container>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
