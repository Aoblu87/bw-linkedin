import cn from "classnames";
import { useEffect } from "react";
import { Card, Col, Figure, Row } from "react-bootstrap";
import { Dot } from "react-bootstrap-icons";
import logoWork from "../../assets/logo-workexperience.png";
import styles from "./styles.module.scss";

export default function Experience({
  profile,

  setExperiences,
  experiences,
}) {
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  console.log(experiences);
  useEffect(() => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`,
      {
        headers: {
          Authorization: process.env.REACT_APP_MY_TOKEN,
        },
      }
    )
      .then((r) => r.json())
      .then(setExperiences);
  }, [profile._id, setExperiences]);

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
        <Card
          className="rounded-3 me-4 mb-2 mt-4 border-0"
          key={experience._id}
        >
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
                <h4 className="fw-bolder">{experience.role}</h4>

                <Card.Subtitle className="mb-2">
                  {experience.role}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2">
                  {experience.company}
                </Card.Subtitle>
                <Card.Subtitle>
                  {experience.startDate}
                  {experience.endDate}
                </Card.Subtitle>
                <div>
                  <span className="fs-6  text-secondary mt-2 ">
                    {experience.area}

                    <Dot />
                  </span>
                  <span className="fs-6  text-secondary ">
                    348 collegamenti
                  </span>
                </div>
                <Card.Text>{experience.description}</Card.Text>
              </Col>
              {/* <Col>
                <Button
                  className="position-absolute rounded-3 rounded-pill"
                  variant="secondary"
                  onClick={handleShow}
                  style={{
                    top: "200px",
                    left: "140px",
                  }}
                >
                  <PersonFill />
                </Button>
              </Col> */}
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
