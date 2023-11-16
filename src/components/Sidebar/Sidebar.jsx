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

export default function Sidebar(endpoint, setEndpoint) {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getProfiles = async () => {
      setIsLoading(true);
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/",
          {
            headers: {
              Authorization: process.env.REACT_APP_MY_TOKEN,
            },
          }
        );
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
      <h5 className="mt-4 ms-4 ">Persone che potresti conoscere</h5>{" "}
      {profile?.map(
        (profile, index) =>
          index < 10 && (
            <Container>
              {isLoading && <Loading />}
              {isError && <Error />}

              <Card
                className={cn("d-flex border-0", styles.card)}
                key={profile._id}
              >
                <Card.Body className="d-flex flex-row p-4">
                  <Col className="d-flex flex-row">
                    <Card.Img
                      src={profile.image}
                      className="rounded-circle border border-white border-4"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#E7E2DC",
                        inset: "110px 0 0 25px",
                      }}
                    />
                    <Container>
                      <Card.Title className="d-flex flex-row">
                        <Link
                          to={`/SpecificProfile/${profile._id}`}
                          key={profile._id}
                          className="link-offset-2 link-underline link-underline-opacity-0 text-dark"
                        >
                          <h5 className="fw-bolder me-2">{profile.name}</h5>
                          <h5 className="fw-bolder">{profile.surname}</h5>
                        </Link>
                      </Card.Title>

                      <h5 className="text-muted">{profile.title}</h5>

                      <Button
                        variant="outline-dark"
                        className="rounded-3 rounded-pill"
                      >
                        <PersonPlusFill />
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
      <h5 className="text-muted align-self-center">Mostra tutto</h5>
    </Card>
  );
}

/*
https://striveschool-api.herokuapp.com/api/profile/
https://striveschool-api.herokuapp.com/api/profile/me
https://striveschool-api.herokuapp.com/api/profile/{userId}
https://striveschool-api.herokuapp.com/api/profile/{userId}/picture
https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
https://striveschool-api.herokuapp.com/api/profile/:userId/experiences


        "_id": "6554c55e1e434c00193e2b00",
        "name": "Alice",
        "surname": "Ibba",
        "email": "alice.ibba5@gmail.com",
        "username": "nym_eria",
        "title": "Interior designer",
        "bio": "",
        "area": "Iglesias, SU, Italy",
        "image": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
        "createdAt": "2023-11-15T13:19:26.400Z",
        "updatedAt": "2023-11-15T13:19:26.400Z",
        "__v": 0


"role":"Architect",
"company":"Andrej Kurent",
"startDate":"2023/05/15",
"endDate":"2023/11/15",
"description":"Doing stuff",
"area":"Ljubljana",

*/
