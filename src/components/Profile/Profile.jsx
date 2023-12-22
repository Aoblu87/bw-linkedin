import { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";
import { Dot, PersonPlusFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import AddExperience from "../AddExperience/AddExperience";
import Experience from "../Experience/Experience";
import Foto from "../Foto";

export default function Profile() {
  const [experiences, setExperiences] = useState();
  //Dati dell'utente loggato
  const [user, setUser] = useState();
  //Memorizzo se l'utente sia loggato o meno
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  //Controllo nel local storage se sono presneti token e userId
  const storedUserId = localStorage.getItem("userId");
  const storedToken = localStorage.getItem("token");

  // Controllo al render del componente che l'utente abbia ancora un token valido altrimenti lo rimando alla pagina del login
  useEffect(() => {
    fetch(`http://localhost:3025/api/profiles/${storedUserId}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setIsLoggedIn(true);
      })
      .catch(() => {
        // Se la chiamata API fallisce reindirizzo l'utente alla pagina di login
        navigate("/");
      });
  }, [storedToken, storedUserId, navigate]);

  console.log(user);

  return (
    <Col className="col-md-8 d-flex flex-column">
      <Card className="rounded-3 me-4 mb-2">
        <div
          className="rounded-top  position-relative"
          style={{
            backgroundColor: "#9FB4B7",
            height: "13.5rem",
            color: "green",
            width: "100%",
          }}
        >
          <Image
            src={user?.cover}
            style={{
              height: "13.5rem",

              width: "100%",
            }}
          ></Image>
        </div>
        <div
          className="rounded-circle  position-absolute"
          style={{
            width: "20%",

            inset: "110px 0 0 25px",
          }}
        >
          <Image
            src={user?.photo}
            alt="Profile user"
            roundedCircle
            className="img-fluid"
            style={{
              height: "140px",
              width: "140px",
              objectFit: "cover",
            }}
          />
        </div>
        <Foto user={user} setUser={setUser} />
        <Card.Body className="d-flex flex-row p-4">
          <Col>
            <Card.Title className="d-flex flex-row">
              <h4 className="fw-bolder mt-5 me-2">{user?.firstName}</h4>
              <h4 className="fw-bolder mt-5">{user?.lastName}</h4>
            </Card.Title>
            <Card.Subtitle>{user?.title} </Card.Subtitle>
            <Card.Text className="fs-6  text-secondary mt-2 ">
              {user?.city}, <span className="">{user?.country}</span>
              <Dot />
              <Card.Link className="fw-bolder text-decoration-none ">
                Informazioni di contatto
              </Card.Link>
            </Card.Text>
            <Card.Text className="fs-6  text-secondary ">
              348 collegamenti
            </Card.Text>
            <Col className="d-flex flex-sm-column flex-md-row mt-2">
              <Button
                className="fw-bold rounded-3 rounded-pill  me-2"
                variant="primary"
              >
                <PersonPlusFill className="me-1" />
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
        </Card.Body>
      </Card>

      <Card className="rounded-3 me-4 mb-2">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>
              <h4 className="fw-bolder mt-2">Esperienza</h4>
            </Card.Title>
            {user && (
              <AddExperience
                user={user}
                setExperiences={setExperiences}
                experiences={experiences}
              />
            )}
          </div>
          {user && (
            <Experience
              user={user}
              setExperiences={setExperiences}
              experiences={experiences}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
