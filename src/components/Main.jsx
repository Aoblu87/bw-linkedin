import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import MyNavbar from "./MyNavbar/MyNavbar";
import Profile from "./Profile/Profile";
import Sidebar from "./Sidebar/Sidebar";

function Main(props) {
  const { user, setUser } = props;
  return (
    <>
      <MyNavbar />
      <Container className="mt-5">
        <Row className="g-0 p-5">
          <Profile user={user} setUser={setUser} />
          <Sidebar user={user} setUser={setUser} />
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default Main;
