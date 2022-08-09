import React from "react";
import { Row, Col } from "react-bootstrap";

function Heading({ title }) {
  return (
    <>
      <Row className="heading py-3 text-center heading">
        <Col xs={12}>
          <h1>{title}</h1>
        </Col>
      </Row>
    </>
  );
}

export default Heading;
