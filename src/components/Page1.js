import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate} from 'react-router-dom';
export default function Page1() {
  const navigate = useNavigate();
  const [InputVal1, setInputVal1] = useState("");

  function SendToNextPage(){
      console.log(InputVal1);
      navigate("/page2",{state:{name:InputVal1}});
  }
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" onChange={(e) => setInputVal1(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={SendToNextPage}
              >
                Submit
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
