import cn from "classnames";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import {
  BellFill,
  BriefcaseFill,
  ChatDotsFill,
  HouseDoorFill,
  Linkedin,
  PeopleFill,
} from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import "react-toastify/dist/ReactToastify.css";
import image from "../../assets/Home.png";
import styles from "./styles.module.scss";

function Homepage() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const storedUserId = localStorage.getItem("userId");
  const storedToken = localStorage.getItem("token");

  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3025/api/profiles/session`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             email,
  //             password,
  //           }),
  //         }
  //       );

  //       const data = await response.json();

  //       if (data.token) {
  //         localStorage.setItem("userId", data.userId);
  //         localStorage.setItem("token", data.token);
  //         setUser(true);
  //         toast("You are logged in!!", {
  //           position: "bottom-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "dark",
  //         });
  //       }

  //       const data2 = {
  //         authorId: localStorage.getItem("userId"),
  //         token: localStorage.getItem("token"),
  //       };

  //       const responseGet = await fetch(
  //         `http://localhost:3025/api/profiles/${data2.userId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${data2.token}`,
  //             method: "GET",
  //           },
  //         }
  //       );
  //       if (!responseGet.ok) {
  //         throw new Error(`HTTP error! Status: ${responseGet.status}`);
  //       } else {
  //         const data3 = await responseGet.json();
  //         setUser(data3);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  /*const GoogleCallbackComponent = async () => {
      const queryParams = queryString.parse(window.location.search);
      const { token, userId } = queryParams;

      if (token && userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        toast("You are logged in!!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

    useEffect(() => {
      GoogleCallbackComponent();
    }, []);*/

  const isLogged = async () => {
    try {
      const response = await fetch(
        `http://localhost:3025/api/profiles/${storedUserId}`,
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );

      if (response.ok) {
        const userDetails = await response.json();
        // const email = userDetails.email;
        console.log(userDetails);
        setUser(userDetails);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect is triggered");
    isLogged();
  }, []);

  return (
    <>
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
                    className="d-flex flex-column align-items-center col-lg-2 "
                  >
                    Iscriviti
                  </Nav.Link>
                </Row>
              </Container>
              <Nav.Link
                href="#action7"
                className="d-flex flex-column align-items-center col-lg-3"
              >
                <Container className="d-flex flex-row justify-content-center">
                  <Button variant="primary">Accedi</Button>
                </Container>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="sfondo">
        <Row>
          <Col className="col-lg-6">
            <h1>Ti diamo il benvenuto nella tua community professionale</h1>
            <Form>
              <Form.Group className="my-3 mx-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="my-3 mx-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="my-3 mx-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="d-flex flex-column">
                <Button
                  variant="primary"
                  type="submit"
                  className="my-3 mx-3"
                  onClick={() => {
                    navigate("/Main");
                  }}
                >
                  Accedi
                </Button>

                <GoogleLoginButton
                  className="me-3"
                  onClick={() => {
                    window.location.assign(
                      `http://localhost:3025/api/profiles/google`
                    );
                  }}
                />
              </div>
            </Form>
          </Col>
          <Col className="col-lg-6">
            <Image src={image} width={700} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Homepage;
