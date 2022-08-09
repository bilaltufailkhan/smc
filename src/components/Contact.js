import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Heading from "./Heading";

function Contact() {
  return (
    <>
      <Container>
        <Row className="">
          <Col lg="3">
            <h2>Contact Us</h2>
          </Col>
          <Col lg="9">
            <div className="hyper-reference"></div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="contact-bg"></div>
          </Col>
        </Row>
      </Container>
      <Container className="mb-4">
        <Row className="align-items-center">
          <Col lg="12">
            <p>
              We would love to help you find the perfect color, but finding the
              right contractor is just as important! Whether you're looking to
              make your bedroom cozier or turn your backyard into an oasis, let
              our <span>smart</span> painters make it easier than ever to live a
              colorful life at home. Call us at <span>443-326-4813</span> or
              fill out the form below and we will get back to you to you with an
              estimate.
            </p>
          </Col>
        </Row>
      </Container>
      <Heading title="fill out the given form" />
      <Container>
        <Row className="py-4">
          <Col>
            <Form>
              <Row>
                <Col lg="6" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Full Name"
                    />
                  </Form.Group>
                </Col>
                <Col lg="6" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="phone"
                      name="phone"
                      placeholder="Enter phone"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg="6" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Col>
                <Col lg="6" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="Enter address"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg="4" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      placeholder="Enter city"
                    />
                  </Form.Group>
                </Col>
                <Col lg="4" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicState">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      placeholder="Enter state"
                    />
                  </Form.Group>
                </Col>
                <Col lg="4" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicZipCode">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="zipcode"
                      placeholder="Enter Zip Code"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg="6" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicWorkType">
                    <Form.Label>
                      Type of Work {"(Residential or Commercial)"}
                    </Form.Label>
                    <Form.Group className="radio-form d-flex align-items-center py-2 justify-content-evenly rounded">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Residential
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          Commercial
                        </label>
                      </div>
                    </Form.Group>
                  </Form.Group>
                </Col>
                <Col lg="6" sm="12">
                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      name="message"
                      placeholder="Tell us about your work"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <Form.Group className="mb-3" controlId="formBasicHearAbout">
                    <Form.Label>
                      How Did You Hear About Us? (Referral, Facebook, Google
                      Search, Advertisement, Other).
                    </Form.Label>
                    <Form.Control type="text" name="hearabout" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <Form.Group className="mb-3" controlId="formBasicHearAbout">
                    <Form.Label>
                      How Soon Are You Looking To Complete The Work? (Planning,
                      Ready-To-Go, A Few Months Out)
                    </Form.Label>
                    <Form.Group className="radio-form d-flex align-items-center py-2 justify-content-evenly rounded">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="option3"
                        />
                        <label class="form-check-label" for="inlineRadio3">
                          In Planning
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio4"
                          value="option4"
                        />
                        <label class="form-check-label" for="inlineRadio4">
                          Ready-to-Go
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio5"
                          value="option5"
                        />
                        <label class="form-check-label" for="inlineRadio5">
                          Still a few months out
                        </label>
                      </div>
                    </Form.Group>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="justify-content-center text-center">
                <Col md="4">
                  <Button className="btn-subscribe w-100 py-3 my-3 rounded">
                    Send Me Free Quote
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
