import React from "react";
// reactstrap
import { Button, Col, Container, Row } from "reactstrap";

const Hero = () => {
  return (
    <Container className="py-4">
      <Row>
        <Col md={{ size: 6 }}>
          <h1 className="text-white fw-bold display-6">
            Software Engineering Virtual Experience
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Col md={{ size: 8 }}>
          <p className="text-white">
            Google User Experience (UX) is made up of multi-disciplinary teams
            of UX Designers, Researchers, Writers, Content Strategists, You’re
            going to assist.
          </p>
        </Col>
        <Col md={{ size: 4 }}>
          <Button color="light" className="d-block mx-auto fw-bold">
            <i class="bi bi-check-lg me-3"></i>
            Enrolled
          </Button>
          <p className="text-white text-center m-0">*Free</p>
        </Col>
      </Row>
      <Row className="mt-3 mb-5">
        <Col md={{ size: 3 }}>
          <div className="d-flex justify-content-between">
            <p className="text-white fw-bold m-0">JP Morgan chase</p>
            <p className="text-white fw-bold m-0">
              <i class="bi bi-alarm-fill"></i> 5-6hrs
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={{ size: 12 }}>
          <div className="d-flex justify-content-between">
            <div className="text-white">
              <i class="bi bi-award-fill"></i> Get Certificate
            </div>
            <div className="text-white">
              <i class="bi bi-briefcase-fill"></i> Job Opportunity
            </div>
            <div className="text-white">
              <i class="bi bi-gear-fill"></i> Recognization
            </div>
            <div className="text-white">
              <i class="bi bi-star"></i> Skill Building
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
