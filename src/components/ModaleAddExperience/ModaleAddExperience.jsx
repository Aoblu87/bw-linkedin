import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { PlusLg } from "react-bootstrap-icons";


function ModaleAddExperience() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



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
                  <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Role</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Role"
                              autoFocus
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Company"
                              autoFocus
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control
                              type="date"
                              autoFocus
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>End Date</Form.Label>
                          <Form.Control
                              type="date"
                              autoFocus
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Description"
                              autoFocus
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Area</Form.Label>
                          <Form.Control
                              type="text"
                              placeholder="Area"
                              autoFocus
                          />
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary rounded-3 rounded-pill" onClick={handleClose}>
                      Close
                  </Button>
                  <Button variant="primary rounded-3 rounded-pill" onClick={AddExperience()}>
                      Add Experience
                  </Button>
              </Modal.Footer>
          </Modal>
    </>
  );
}

/*"role":"Architect",
"company":"Andrej Kurent",
"startDate":"2023/05/15",
"endDate":"2023/11/15",
"description":"Doing stuff",
"area":"Ljubljana",*/

export default ModaleAddExperience;