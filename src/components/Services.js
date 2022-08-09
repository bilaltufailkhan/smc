import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import GridGallery from "./GridGallery";

function Services() {
  return (
    <>
      <Container>
        <Row className="pt-4">
          <Col lg="2">
            <h2>Services</h2>
          </Col>
          <Col lg="10">
            <div className="hyper-reference"></div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <GridGallery />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>
              We understand the importance of trust in the contractor you are
              inviting into your home or business, and our goal is to achieve
              this high level of trust before the project even begins. Our smart
              painters make sure the project is completed correctly,
              efficiently, and with minimal interruption to the home or
              business.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
