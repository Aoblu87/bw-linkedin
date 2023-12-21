import { useEffect, useState } from "react"; //ChangeEvent e FormEvent sono i tipi degli eventi onChange e onSubmit
import { Button, Form } from "react-bootstrap";
import { CameraFill } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export default function Foto({ profile, setProfile }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const storedUserId = localStorage.getItem("userId");
  const storedToken = localStorage.getItem("token");
  const [fd, setFd] = useState(new FormData()); //FormData e' una classe usata per raccogliere dati non stringa dai form
  //E' formata da coppie chiave/valore => ["post", File], ["exp", File]
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      let response = await fetch(
        `http://localhost:3025/api/profiles/${storedUserId}/photo`,
        {
          //qui l'id andra' sostituito con un id DINAMICO!!!!!
          method: "POST",
          body: fd, //non serve JSON.stringify
          headers: {
            //NON serve ContentType :)
            Authorization: storedToken,
          },
        }
      );
      if (response.ok) {
        let photo = await response.json();
        setFd(photo);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      fetch(`http://localhost:3025/api/profiles/me`)
        .then((r) => r.json())
        .then(setProfile);
      console.log(setProfile);
    } catch (error) {
      console.log(error);
    }
  }, [setProfile]);

  const handleFile = (e) => {
    setFd((prev) => {
      //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      prev.delete("profile"); //ricordatevi di svuotare il FormData prima :)
      prev.append("profile", e.target.files[0]); //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return prev;
    });
  };
  return (
    <>
      <Button
        className="position-absolute rounded-3 rounded-pill"
        variant="primary"
        onClick={handleShow}
        style={{
          top: "200px",
          left: "140px",
        }}
      >
        <CameraFill />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Foto</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <input type="file" onChange={handleFile} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Upload
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
