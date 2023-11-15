import { useEffect, useState } from "react";
import { Card, Col, Figure, Row } from "react-bootstrap";
import { Dot } from "react-bootstrap-icons";

export default function Experience({ profile }) {
  const [experiences, setExperiences] = useState();

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
  }, [profile._id]);

  // "role":"Nanny",
  // "company":"WC",
  // "startDate":"2020/11/11",
  // "endDate":"2020/12/01",
  // "description":"Doing stuff",
  // "area":"Dublin",
  return experiences?.map((experience) => (
    <Card className="rounded-3 me-4 mb-2" key={experience._id}>
      <Card.Body className="d-flex flex-column ">
        <Row>
          <Card.Title>
            <h4 className="fw-bolder mt-2">Esperienza</h4>
          </Card.Title>
        </Row>
        <Row>
          <Figure className="col-2">
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="holder.js/171x180"
            />
          </Figure>
          <Col>
            <h4 className="fw-bolder">{experience.role}</h4>

            <Card.Subtitle>
              {experience.role} - Università di Pisa
            </Card.Subtitle>
            <Card.Subtitle>
              {experience.company} - Università di Pisa
            </Card.Subtitle>
            <Card.Subtitle>
              {experience.startDate} - Università di Pisa
              {experience.endDate} - Università di Pisa
            </Card.Subtitle>
            <Card.Text className="fs-6  text-secondary mt-2 ">
              {experience.area}
              {experience.username}
              <Dot />
            </Card.Text>
            <Card.Text className="fs-6  text-secondary ">
              348 collegamenti
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  ));
}
