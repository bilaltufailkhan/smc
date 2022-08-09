import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import paint from "../assets/img/paint.png";

function AboutUs() {
  return (
    <>
      <Container>
        <Row className="py-4">
          <Col lg="2">
            <h2>About Us</h2>
          </Col>
          <Col lg="10">
            <div className="hyper-reference"></div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="about-bg"></div>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row className="align-items-center">
          <Col lg="2">
            <img src={paint} width="auto" height="150px" />
          </Col>
          <Col lg="10">
            <p>
              We use the highest quality paint products– 
              <span>Sherwin Williams</span> interior paint and take great care
              to protect all un-painted surfaces and thoroughly clean up our
              work areas at the end of each day.
              <br />
              <br />
              It brings our staff great joy and a sense of pride for a job well
              done.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
