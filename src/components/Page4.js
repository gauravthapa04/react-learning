import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function Page4() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
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
                <div>Hi {searchParams.get("name")}</div>
                <button onClick={ReturnToHome}>Return To Homepage</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
