import React from "react";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// reactstrap
import { Button, Col, Container, Row } from "reactstrap";
// icons
import "bootstrap-icons/font/bootstrap-icons.css";
// custom css
import "./styles/style.css";
// components
import TaskList from "./components/modules/TaskList";
import About from "./components/about/About";
import CardLeft from "./components/cards/CardLeft";
import CardRight from "./components/cards/CardRight";
import Companies from "./components/companies/Companies";
import Hero from "./components/header/Hero";

const App = () => {
  return (
    <Container fluid>
      <Row className="bg-primary mb-3">
        <Col md={{ size: 12 }}>
          <Hero />
        </Col>
      </Row>
      <h4 className="text-primary fw-bold m-0">
        Companies with vacant positions for this role
      </h4>
      <Container className="mt-3">
        <Row>
          <Col md={{ size: 12 }}>
            <Companies />
          </Col>
        </Row>
      </Container>
      <Row className="mt-3">
        <Col md={{ size: 12 }}>
          <h4 className="text-primary fw-bold m-0">Why to do this course?</h4>
          <About />
        </Col>
      </Row>
      <h4 className="text-primary fw-bold m-0">Featured Reviews</h4>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <CardLeft />
          <CardRight />
        </Row>
      </Container>
      <Row className="mt-3">
        <Col md={{ size: 12 }}>
          <h4 className="text-primary fw-bold">Modules</h4>
          <TaskList />
        </Col>
      </Row>
      <Row className="my-3">
        <Col md={{ size: 4, offset: 4 }}>
          <Button color="primary" block outline className="fs-bold">
            Get Certificate <i className="bi bi-arrow-right"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
