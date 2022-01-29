import React from "react";
// reactstrap
import { Col, Container, Row } from "reactstrap";

const CardRight = () => {
  return (
    <Col md={{ size: 8 }}>
      <Container>
        <Row>
          <Col className="d-flex justify-content-between">
            <div>
              <p className="text-primary m-0" style={{ fontSize: "30px" }}>
                <i class="bi bi-quote"></i>
              </p>
            </div>
            <div>
              <div>
                <p className="text-primary m-0" style={{ fontSize: "30px" }}>
                  <i class="bi bi-arrow-left-circle me-3"></i>
                  <i class="bi bi-arrow-right-circle-fill"></i>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              Great Experience learning with Danial he has tamanduas knowledge
              and simple clean understandable explanation I become editor
              because of Danial Tq Danial for quality of knowledge you are
              shared with us throughout the course.
            </p>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default CardRight;
