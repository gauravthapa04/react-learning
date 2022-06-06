import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
export default function Page5() {
  const navigate = useNavigate();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
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
                <div>Hi {name}</div>
                <button onClick={ReturnToHome}>Return To Homepage</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
