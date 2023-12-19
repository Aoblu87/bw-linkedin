import { useCallback, useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";
import { Dot, PersonPlusFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddExperience from "../AddExperience/AddExperience";
import Experience from "../Experience/Experience";
import Foto from "../Foto";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState();

  const [experiences, setExperiences] = useState();
  const { id } = useParams();

  const getUserData = useCallback(() => {
    try {
      fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}`, {
        headers: {
          Authorization: process.env.REACT_APP_MY_TOKEN,
        },
      })
        .then((r) => r.json())
        .then(setProfile);
      console.log(setProfile);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

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
        ></div>
        <div
          className="rounded-circle  position-absolute"
          style={{
            width: "20%",

            inset: "110px 0 0 25px",
          }}
        >
          <Image
            src={profile?.image}
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
        <Foto profile={profile} setProfile={setProfile} />
        <Card.Body className="d-flex flex-row p-4">
          <Col>
            <Card.Title className="d-flex flex-row">
              <h4 className="fw-bolder mt-5 me-2">{profile?.name}</h4>
              <h4 className="fw-bolder mt-5">{profile?.surname}</h4>
            </Card.Title>
            <Card.Subtitle>{profile?.title} - Università di Pisa</Card.Subtitle>
            <Card.Text className="fs-6  text-secondary mt-2 ">
              {profile?.area}
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
                <PersonPlusFill />
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
            {profile && (
              <AddExperience
                profile={profile}
                setExperiences={setExperiences}
                experiences={experiences}
              />
            )}
          </div>
          {profile && (
            <Experience
              profile={profile}
              setExperiences={setExperiences}
              experiences={experiences}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
