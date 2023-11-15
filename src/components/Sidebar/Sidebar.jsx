import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Loading from "../Loading"
import Error from "../Error"
import { Container, Col } from "react-bootstrap";
import styles from "./styles.module.scss"
import { PersonPlusFill } from "react-bootstrap-icons";
import cn from "classnames";

export default function Sidebar() {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getProfiles = async () => {
      setIsLoading(true)
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/",
          {
            headers: {
              Authorization: process.env.REACT_APP_MY_TOKEN,
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let profilo = await response.json()
          setProfile(profilo)
          setIsLoading(false)
          setIsError(false)
        } else {
          console.log('error')
          setIsLoading(false)
          setIsError(true)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
        setIsError(true)
      }
    }
    if (!profile) {
      getProfiles()
    }
  }, [profile])

  return profile?.map((profile) => (
    <Container>
      {isLoading && <Loading />}
      {isError && <Error />}

      <Card className={cn ("d-flex border-0", styles.card)} key={profile._id}>

        <Card.Body className="d-flex flex-row p-4">
          <Col className="d-flex flex-row">
            <Card.Img src={profile.image}
              className="rounded-circle border border-white border-4"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#E7E2DC",
                inset: "110px 0 0 25px"
              }} />
            <Container>
              <Card.Title className="d-flex flex-row">
                <h5 className="fw-bolder me-2">{profile.name}</h5>
                <h5 className="fw-bolder">{profile.surname}</h5>
              </Card.Title>
              <Card.Text>
              <h5 className="text-muted">{profile.title}</h5>
              </Card.Text>
              <Button variant="outline-dark" className="rounded-3 rounded-pill">
                <PersonPlusFill />
                Collegati</Button>
            </Container>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  ));
}
