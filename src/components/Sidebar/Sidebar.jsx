import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

export default function Sidebar() {
    const [profile, setProfile] = useState([]);
    useEffect(() => {
      fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: 'GET',
        headers: {
          Authorization: process.env.REACT_APP_MY_TOKEN,
        },
      })
        .then((r) => r.json())
        .then(setProfile);
    }, []);

    return (
        profile.map(() =>
            <Card className="col-3">
        <Card.Img variant="top" src={profile.image} />
        <Card.Body>
          <Card.Title>{profile.name}{profile.surname}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
)
        )
        }
        
       
    