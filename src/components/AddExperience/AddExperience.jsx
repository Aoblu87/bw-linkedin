import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'

import Modal from 'react-bootstrap/Modal';
import { PlusLg } from "react-bootstrap-icons";


 const AddExperience = ({ profile }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [experience, setExperience] = useState({
        role: '',
        company: '',
        startDate: 1,
        endDate: 1,
        description: '',
        area: '',
      }) 

  
  const handleSubmit = (e) => {
    e.preventDefault();    

   
    try {
      fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences`, {
        headers: {
          Authorization: process.env.REACT_APP_MY_TOKEN,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(experience),
      })
        .then(function (response) {
          if (response.ok) {
            toast.success("Esperienza aggiunta!", {
              position: toast.POSITION.BOTTOM_RIGHT,
            });
          } else {
            toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        })

        .then(setExperience)
        .finally(() => {
          
        });
    } catch (error) {
      console.log(error);
    }
  
  return (
    <>
          <Button variant="outline-dark" className="rounded-3 rounded-pill align-self-center" onClick={handleShow}>
              <PlusLg />
          </Button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Add Experience</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Role</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Role"                              
                              value={profile.role}
                              onChange={(e) => setExperience(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Company"
                              value={profile.company}
                              onChange={(e) => setExperience(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control
                              type="date"                              
                              value={profile.startDate}
                              onChange={(e) => setExperience(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>End Date</Form.Label>
                          <Form.Control
                              type="date"                              
                              value={profile.endDate}
                              onChange={(e) => setExperience(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Description"                            
                              value={profile.description}
                              onChange={(e) => setExperience(e.target.value)}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Area</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Area"
                              value={profile.area}
                              onChange={(e) => setExperience(e.target.value)}
                          />
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary rounded-3 rounded-pill" onClick={handleClose}>
                      Close
                  </Button>
                  <Button variant="primary rounded-3 rounded-pill" type="submit">
                      Add Experience
                  </Button>
              </Modal.Footer>
          </Modal>
    </>
  );
}}

export default AddExperience