import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Loading from "../Loading"
import Error from "../Error"
import { Container } from "react-bootstrap";

export default function Sidebar() {
    const [profile, setProfile] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
      fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_MY_TOKEN,
        },
      })
        .then((r) => r.json())
        .then(setProfile);
    }, []);
  

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
      if (profile) {
        getProfiles()
      }
    }, [])

    return profile.map(() =>
        <>
        
        
            <Card className="col-3" key={profile._id}>
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

</>)
        
        }
        
       
    