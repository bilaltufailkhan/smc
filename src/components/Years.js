import React from "react";
import Heading from "./Heading";

import { Container, Row, Col } from "react-bootstrap";

import service1 from "../assets/img/service1.png";
import service2 from "../assets/img/service2.png";
import service3 from "../assets/img/service3.png";

function Years() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Heading title="over the past 14 years" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="py-4 justify-content-between text-center">
          <Col md="4" sm="12" className="my-4">
            <Row className="justify-content-center">
              <Col xs="3" className="text-center">
                <img src={service1} width="auto" height="60px" />
              </Col>
              <Col xs="7">
                <h5>425</h5>
                <h6>Customers Served</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" sm="12" className="my-4">
            <Row className="justify-content-center">
              <Col xs="3">
                <img src={service2} width="auto" height="60px" />
              </Col>
              <Col xs="7">
                <h5>34,310</h5>
                <h6>Gallons of Paint Used</h6>
              </Col>
            </Row>
          </Col>
          <Col md="4" sm="12" className="my-4">
            <Row className="justify-content-center">
              <Col xs="3">
                <img src={service3} width="auto" height="60px" />
              </Col>
              <Col xs="7">
                <h5>1530</h5>
                <h6>Projects Completed</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Years;
