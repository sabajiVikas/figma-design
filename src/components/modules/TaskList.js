import React from "react";
// reactstrap
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
// components
import Btn from "../Btn";

const TaskList = () => {
  return (
    <ListGroup flush>
      <ListGroupItem>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={{ size: 3 }}>
              <img
                src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="img-fluid rounded"
                style={{ height: "150px" }}
                alt="listImg"
              />
            </Col>
            <Col md={{ size: 6 }}>
              <Container fluid>
                <Row>
                  <Col md={{ size: 12 }}>
                    <h4 className="text-primary fw-bold">
                      Task1: How to start?
                    </h4>
                    <p>
                      Interface with a stock price data feed and set up your
                      system for analysis of the data.
                    </p>
                    <Row>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={{ size: 3 }}>
              <p className="text-success text-center m-0">
                Completed <i className="bi bi-check-circle-fill"></i>
              </p>
              <Button color="primary" block className="fw-bold">
                Get Started <i className="bi bi-arrow-right"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
      <ListGroupItem>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={{ size: 3 }}>
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="img-fluid rounded"
                style={{ height: "150px" }}
                alt="listImg"
              />
            </Col>
            <Col md={{ size: 6 }}>
              <Container fluid>
                <Row>
                  <Col md={{ size: 12 }}>
                    <h4 className="text-primary fw-bold">
                      Task2: What is this task about?
                    </h4>
                    <p>
                      Interface with a stock price data feed and set up your
                      system for analysis of the data
                    </p>
                    <Row>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={{ size: 3 }}>
              <p className="text-success text-center m-0">
                Completed <i className="bi bi-check-circle-fill"></i>
              </p>
              <Button color="primary" block className="fw-bold">
                Get Started <i className="bi bi-arrow-right"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
      <ListGroupItem>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={{ size: 3 }}>
              <img
                src="https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                className="img-fluid rounded"
                style={{ height: "150px" }}
                alt="listImg"
              />
            </Col>
            <Col md={{ size: 6 }}>
              <Container fluid>
                <Row>
                  <Col md={{ size: 12 }}>
                    <h4 className="text-primary fw-bold">
                      Task3: How to finish?
                    </h4>
                    <p>
                      Interface with a stock price data feed and set up your
                      system for analysis of the data
                    </p>
                    <Row>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                      <Col>
                        <Btn btnText="#socialimpact" />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col md={{ size: 3 }}>
              <p className="text-success text-center m-0">
                Completed <i className="bi bi-check-circle-fill"></i>
              </p>
              <Button color="primary" block className="fw-bold">
                Get Started <i className="bi bi-arrow-right"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
    </ListGroup>
  );
};

export default TaskList;
