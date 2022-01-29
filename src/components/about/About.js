import React from "react";
// reactstrap
import { Col, Container, Row } from "reactstrap";
// image
import qImg from "../../assets/images/question.svg";

const About = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center py-3">
        <Col md={{ size: 8 }}>
          <p className="text-center">
            Google User Experience (UX) is made up of multi-disciplinary teams
            of UX Designers, Researchers, Writers, Content Strategists, You're
            going to assist with some development of an alternative way to
            visualize and analyze share price data for our traders - this will
            alert them of potential trading opportunities. Great Experience
            learning with Danial he has tamanduas knowledge and simple clean
            understandable explanation.
          </p>
        </Col>
        <Col md={{ size: 4 }}>
          <img
            src={qImg}
            className="img-fluid d-block mx-auto rounded"
            alt="qImg"
            style={{ height: "150px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
