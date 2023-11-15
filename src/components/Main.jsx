import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Experience from "./Experience/Experience";
import Profile from "./Profile/Profile";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

export default function Main() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization: process.env.REACT_APP_MY_TOKEN,
      },
    })
      .then((r) => r.json())
      .then(setProfile);
  }, []);
  return (
    <Row className="g-0 p-5">
      <Col className="col-md-8 d-flex flex-column">
        <Profile profile={profile} setProfile={setProfile} />
        <Experience profile={profile} setProfile={setProfile} />
      </Col>
      {/* al posto del codice che ho messo qui sotto puoi aggiungere il componente con un file jsx a parte per la sidebar*/}
      <Card className="col-3">
        <Sidebar />
      </Card>
    </Row>
  );
}
