import cn from "classnames";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { PersonPlusFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Error from "../Error";
import Loading from "../Loading";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const { use, setUser } = props;
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProfiles = async () => {
      setIsLoading(true);
      try {
        let response = await fetch("http://localhost:3025/api/profiles");
        console.log(response);
        if (response.ok) {
          let profilo = await response.json();
          setProfile(profilo);
          setIsLoading(false);
          setIsError(false);
        } else {
          console.log("error");
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    if (!profile) {
      getProfiles();
    }
  }, [profile]);

  return (
    <Card className="col-3 justify-content-center">
      <h5 className="fw-bolder fs-6 mt-4 ms-4 ">
        Persone che potresti conoscere
      </h5>{" "}
      {profile?.map(
        (profile, index) =>
          index < 10 && (
            <Container className="p-0">
              {isLoading && <Loading />}
              {isError && <Error />}

              <Card
                className={cn("d-flex border-0", styles.card)}
                key={profile._id}
              >
                <Card.Body className="d-flex flex-row p-3">
                  <Col className="d-flex flex-row">
                    <Card.Img
                      src={profile.photo}
                      className="rounded-circle border border-white border-4"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#E7E2DC",
                        inset: "110px 0 0 25px",
                      }}
                    />
                    <Container className="p-0">
                      <Card.Title className="d-flex flex-row ms-3  ">
                        <Link
                          to={`/${profile._id}`}
                          key={profile._id}
                          className="link-offset-2 link-underline link-underline-opacity-0 text-dark p-0"
                        >
                          <h5 className="fw-bolder ">{profile.firstName}</h5>

                          <h5 className="fw-bolder">{profile.lastName}</h5>
                        </Link>
                      </Card.Title>

                      <h5 className="text-muted">{profile.title}</h5>

                      <Button
                        variant="outline-light text-secondary"
                        className="fw-bold rounded-3 rounded-pill  me-2"
                      >
                        <PersonPlusFill className="me-1" />
                        Collegati
                      </Button>
                    </Container>
                  </Col>
                </Card.Body>
              </Card>
            </Container>
          )
      )}
      <hr />
      <Col className="d-flex justify-content-center align-items-center">
        <h5 className="text-muted align-self-center fw-bolder">Mostra tutto</h5>
      </Col>
    </Card>
  );
}
