import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import Footer from "./Footer/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./MyNavbar/MyNavbar";
import SpecificProfile from "./SpecificProfile/SpecificProfile";
import Sidebar from "./Sidebar/Sidebar";


function SpecificProfileViewer() {
    return (
        <>
            <MyNavbar />
            <Container className="mt-5">
                <Row className="g-0 p-5">
                    <SpecificProfile />
                    <Sidebar />
                </Row>
                <Footer />
            </Container>
        </>
    );
}

export default SpecificProfileViewer;