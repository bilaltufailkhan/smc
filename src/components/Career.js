import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Career() {
  return (
    <>
      <Container>
        <Row className="">
          <Col lg="2">
            <h2>Careers</h2>
          </Col>
          <Col lg="10">
            <div className="hyper-reference"></div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="career-bg"></div>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row className="align-items-center">
          <Col lg="12">
            <p>
              <span>Start Your Career With Us!</span>
              <br />
              <br />
              Smart Contracting is looking for painters to join our team. We’re
              a full-service painting company serving the {" "}
              <span>Baltimore, Howard and Prince Georges County</span> areas. We
              value our smart employees—Well-trained, qualified, and licensed
              professionals offer the best service to our customers, and they
              make our team stronger. We take pride in our community— when you
              work with us, we help you work smarter, not harder. Call us for a
              job opportunity now @ <span>443-326-4813</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Career;
