import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { logo } from "../assets/img/logo.png";
import logo from "../assets/img/logo.png";

const Navigation = () => {
  return (
    <>
      <Container fluid>
        <Navbar bg="transparent" expand="lg" className="fixed-top">
          <Container>
            <Navbar.Brand href="#">
              <img src={logo} width="auto" height="40px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-2" navbarScroll>
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/">
                  Services
                </Link>
                <Link className="nav-link" to="/">
                  About Us
                </Link>
                <Link className="nav-link" to="/">
                  Career
                </Link>
                <Link className="nav-link" to="/">
                  Contact Us
                </Link>
              </Nav>
              <Button className="btn-subscribe">Subscribe</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
