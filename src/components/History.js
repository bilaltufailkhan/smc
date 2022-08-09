import React from "react";
import GridGallery from "./GridGallery";
import Heading from "./Heading";

import { Container, Row, Col } from "react-bootstrap";

function History() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <GridGallery />
          </Col>
        </Row>
        <Container className="pt-2 pb-3">
          <Row>
            <Col>
              <p>
                We offer Interior and Exterior, Residential and Commercial
                Painting and Staining Services. Along with Power Washing,
                Wallpaper Stripping, Wall Preparation and Repair. We offer the
                highest level of quality work at competitive prices for
                residential and commercial applications. <br />
                <br />
                Our painters are smart and provide clean and efficient service.
                All of our work is guaranteed. We service the Baltimore, Howard
                and Prince Georges County areas and their surrounding
                communities.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default History;
