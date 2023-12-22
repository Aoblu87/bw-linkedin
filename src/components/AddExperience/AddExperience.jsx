import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";

import { PlusLg } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

const AddExperience = ({ user, setExperiences, experiences }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const storedUserId = localStorage.getItem("userId");
  const storedToken = localStorage.getItem("token");
  const [experience, setExperience] = useState({
    user: "",
    employmentType: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    setExperience((c) => ({
      ...c,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        `http://localhost:3025/api/profiles/${storedUserId}/experiences`,

        {
          headers: {
            Authorization: storedToken,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(experience),
        }
      );

      if (response.ok) {
        toast.success("Esperienza aggiunta!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setExperience({
          user: "",
          employmentType: "",
          companyName: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      } else {
        toast.error("Something went wrong!", {
          position: toast.POSITION.TOP_LEFT,
        });
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      toast.warn(error);
    }
  };

  return (
    <>
      <Button
        variant="outline-dark"
        className="rounded-3 rounded-pill align-self-center"
        onClick={handleShow}
      >
        <PlusLg />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experience</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User</Form.Label>
              <Form.Control
                type="text"
                placeholder="User"
                value={storedUserId}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Employment type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                value={experience.employmentType}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    employmentType: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company"
                value={experience.companyName}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    companyName: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                value={experience.startDate}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    startDate: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                value={experience.endDate}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    endDate: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={experience.description}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Area"
                value={experience.area}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    area: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary rounded-3 rounded-pill"
              type="submit"
              onClick={handleClose}
            >
              Add Experience
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddExperience;
