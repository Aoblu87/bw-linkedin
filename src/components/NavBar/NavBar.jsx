import styles from './styles.module.scss'
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Linkedin, HouseDoorFill, PeopleFill } from 'react-bootstrap-icons';
import cn from "classnames";



function NavBar() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"><Linkedin className={cn (styles.card)}/></Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='d-flex flex-column align-items-center'><HouseDoorFill className={cn (styles.card)} /><h6>Home</h6></Nav.Link>
            <Nav.Link href="#action2" className='d-flex flex-column align-items-center'><PeopleFill className={cn (styles.card)} /><h6>Rete</h6></Nav.Link>
            <Nav.Link href="#action3" className='d-flex flex-column align-items-center'><HouseDoorFill className={cn (styles.card)} /><h6>Home</h6></Nav.Link>
            <Nav.Link href="#action4" className='d-flex flex-column align-items-center'><HouseDoorFill className={cn (styles.card)} /><h6>Home</h6></Nav.Link>
            <Nav.Link href="#action5" className='d-flex flex-column align-items-center'><HouseDoorFill className={cn (styles.card)} /><h6>Home</h6></Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;