import { useEffect, useState } from "react";
import { Card, Col, Figure, Row } from "react-bootstrap";
import { Dot } from "react-bootstrap-icons";
import logoWork from "../../assets/logo-workexperience.png";
import styles from "./styles.module.scss";
import cn from "classnames";

export default function Experience({ profile }) {
  const [experiences, setExperiences] = useState();
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
  }, [profile._id]);

  //   {

  //     "role": "Titolare - Ingegnere senior",
  //     "company": "STUDIO TECNICO DI INGEGNERIA INTEGRATA",
  //     "startDate": "2019-11-11",
  //     "endDate": "2020-12-01",
  //     "description": "Progettazione impianti elettrici e speciali, BIM, Collaudi, automazione industriale",
  //     "area": "Perugia",
  // }

  return (
    <Card className="rounded-3 me-4 mb-2">
      {experiences?.map((experience) => (
        <Card className="border-0 me-4 mb-2 p-2" key={experience._id}>
          <Card.Body className="d-flex flex-column ">
            <Row>
              <Card.Title>
                <h5 className="fw-bolder fs-5 mt-2">Esperienza</h5>
              </Card.Title>
            </Row>
            <Row>
              <Figure className={cn("col", styles.imgBox)}>
                <Figure.Image
                  className={styles.logoWork}
                  alt="171x180"
                  src={logoWork}
                />
              </Figure>
              <Col className="col-10">
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
      ))}
    </Card>
  );
}
