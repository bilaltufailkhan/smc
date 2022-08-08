import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import partner1 from "../assets/img/partner1.png";
import partner2 from "../assets/img/partner2.png";
import partner3 from "../assets/img/partner3.png";
import partner4 from "../assets/img/partner4.png";
import partner5 from "../assets/img/partner5.png";

function Partners() {
  return (
    <>
      <Container fluid className="partners">
        <Row className="heading py-3 text-center">
          <Col xs={12}>
            <h1>Our Partners</h1>
          </Col>
        </Row>
        <Row className="content justify-content-center py-5 text-center">
          <Col md={2}>
            <img src={partner1} />
          </Col>
          <Col md={2}>
            <img src={partner2} />
          </Col>
          <Col md={2}>
            <img src={partner3} />
          </Col>
          <Col md={2}>
            <img src={partner4} />
          </Col>
          <Col md={2}>
            <img src={partner5} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Partners;
