import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

function Header() {
  return (
    <>
      <Container fluid className="header">
        <Container className="vh-100 d-flex align-items-center justify-content-center">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1>Painting and Staining Services</h1>
              <p>
                We Offer Interior And Exterior, Residential And Commercial
                Painting and Staining Services. Along With Power Washing,
                Wallpaper Stripping, Wall Preparation And Repair.
              </p>
              <Button className="btn-subscribe mt-5">Read More</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Header;
