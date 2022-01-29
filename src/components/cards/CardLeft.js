import React from "react";
// reactstrap
import { Col, Container, Row } from "reactstrap";

const CardLeft = () => {
  return (
    <Col md={{ size: 4 }}>
      <Container>
        <Row className="d-flex justify-content-center align-items-center py-3">
          <Col md={{ size: 4 }}>
            <img
              src="https://images.pexels.com/photos/2121122/pexels-photo-2121122.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              className="img-fluid rounded-circle d-block mx-auto"
              alt="cardImg"
              style={{ height: "125px", width: "125px" }}
            />
          </Col>
          <Col md={{ size: 8 }}>
            <h5 className="fw-bold mt-3">Charlie Lipshutz</h5>
            <p className="text-secondary m-1">2 months ago</p>
            <div>
              <p className="text-warning">
                <i class="bi bi-star-fill mx-1"></i>
                <i class="bi bi-star-fill mx-1"></i>
                <i class="bi bi-star-fill mx-1"></i>
                <i class="bi bi-star-fill mx-1"></i>
                <i class="bi bi-star-fill mx-1"></i>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Col>
  );
};

export default CardLeft;
