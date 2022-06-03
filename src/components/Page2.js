import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
export default function Page2() {
  const navigate = useNavigate();
  const location = useLocation();
  function ReturnToHome(){
    navigate("/");
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="card">
              <div className="card-body">
                <div>Hi {location.state.name}</div>
                <button onClick={ReturnToHome}>Return To Homepage</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
