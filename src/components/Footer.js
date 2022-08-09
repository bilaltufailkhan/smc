import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <>
      <Container fluid className="footer py-5">
        <Container className="">
          <Row className="justify-content-center">
            <Col md="4" sm="12" className="d-flex align-items-center">
              <img src={logo} width="250px" height="auto" />
            </Col>
            <Col md="4" sm="12">
              <ul className="d-flex flex-column">
                <li className="nav-item">
                  <Link className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Our Partners</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Career</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col md="4" sm="12" className="social">
              <h4>Social Media</h4>
              <Row className="align-items-center">
                <Col xs="1">
                  <Link to="/">
                    <i class="fa-brands fa-facebook"></i>
                  </Link>
                </Col>
                <Col xs="1">
                  <Link to="/">
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                </Col>
                <Col xs="1">
                  <Link to="/">
                    <i class="fa-brands fa-twitter"></i>
                  </Link>
                </Col>
              </Row>
              <Row className="mt-4">
                <h4>Call Us</h4>
                <span>443-326-4813</span>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Footer;
