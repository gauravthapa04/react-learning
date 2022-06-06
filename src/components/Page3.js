import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Page3() {
  const navigate = useNavigate();
  function ReturnToHome2(){
    localStorage.removeItem('Name');
    navigate("/");
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={12}>
            <div className="card">
              <div className="card-body">
                <p>Data From Local Storage</p>
                <div>Hi {localStorage.getItem('Name')}</div>
                <button onClick={ReturnToHome2}>Return To Homepage</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
