import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import { Button, Card, Col, Figure, Row } from "react-bootstrap";
import { Dot, PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { toast } from "react-toastify";
import logoWork from "../../assets/logo-workexperience.png";
import ChangeExperience from "../ChangeExperience";
import styles from "./styles.module.scss";

export default function Experience({
  user,

  setExperiences,
  experiences,
}) {
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const storedUserId = localStorage.getItem("userId");

  // Mostra esperienze-----funzione GET
  const getExperiences = useCallback(() => {
    fetch(`http://localhost:3025/api/profiles/${storedUserId}/experiences`)
      .then((r) => r.json())
      .then(setExperiences);
  }, [storedUserId, setExperiences]);

  useEffect(() => {
    getExperiences();
  }, [getExperiences]);

  // Cancella esperienza -----funzione DELETE
  const handleDelete = (id, user) => {
    // setLoading(true);
    try {
      fetch(
        `http://localhost:3025/api/profiles/experiences/${experiences._id}`,
        {
          method: "DELETE",
        }
      )
        .then((r) => {
          if (r.ok) {
            toast.success("Deleted successfully!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })
        .then(setExperiences);
      // .finally(() => {
      //   setLoading(false);
      // });
    } catch (error) {
      console.log(error);
    }
  };

  // Funzione per formattare la data
  // const formatDate = (dateString) => {
  //   const dateObject = new Date(dateString);
  //   const formattedDate = dateObject.toISOString().split("T")[0];
  //   return formattedDate;
  // };

  // "role":"Nanny",
  // "company":"WC",
  // "startDate":"2020/11/11",
  // "endDate":"2020/12/01",
  // "description":"Doing stuff",
  // "area":"Dublin",

  return (
    <div>
      {" "}
      {experiences?.map((experience) => (
        <>
          <Card className="rounded-3  mb-2 mt-4 border-0" key={experience._id}>
            <Card.Body className="d-flex flex-column ">
              <Row>
                <Card.Title></Card.Title>
              </Row>
              <Row>
                <Figure className={cn("col-2", styles.imgBox)}>
                  <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={logoWork}
                  />
                </Figure>
                <Col>
                  <h4 className="fw-bolder">{experience.companyName}</h4>

                  <Card.Subtitle className="mb-3">
                    {experience.companyName}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-3">
                    {experience.location}
                  </Card.Subtitle>
                  <Col className="d-flex">
                    <Card.Subtitle className="me-3 mb-3">
                      Inizio:
                      {experience.startDate}
                    </Card.Subtitle>
                    <Card.Subtitle> Fine:{experience.endDate}</Card.Subtitle>
                  </Col>
                  <div>
                    <span className="fs-6  text-secondary mt-2 ">
                      {experience.employmentType}

                      <Dot />
                    </span>
                    <span className="fs-6  text-secondary ">
                      348 collegamenti
                    </span>
                  </div>
                  <Card.Text>{experience.description}</Card.Text>
                </Col>

                <Col xs={1}>
                  <Button
                    className="rounded-3 rounded-pill"
                    variant="secondary"
                    onClick={handleShow}
                  >
                    <PencilFill />
                  </Button>
                </Col>
                <Col xs={1}>
                  <Button
                    className="rounded-3 rounded-pill"
                    variant="danger"
                    onClick={() =>
                      handleDelete(experience.user, experience._id)
                    }
                  >
                    <Trash3Fill />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <ChangeExperience
            show={show}
            setShow={setShow}
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </>
      ))}
    </div>
  );
}
