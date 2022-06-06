import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate} from 'react-router-dom';
export default function Page1() {
  const navigate = useNavigate();
  const [InputVal1, setInputVal1] = useState("");
  const [InputVal2, setInputVal2] = useState("");
  const [InputVal3, setInputVal3] = useState("");
  const [InputVal4, setInputVal4] = useState("");
  function SendToNextPage(){
      navigate("/page2",{state:{name:InputVal1}});
  }
  function LocalStorage(){
    localStorage.setItem('Name', InputVal2);
    navigate("/page3");
  }
  function QueryStringStorage(){
    navigate("/page4?name="+InputVal3+"");
  }
  function QueryStringStorageNew(){
    navigate("/page5?name="+InputVal4+"");
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
                  <input type="text" className="form-control" value={InputVal1} onChange={(e) => setInputVal1(e.target.value)} />
                </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={SendToNextPage}
              >
                Page Storage
              </button>
            </div>
            </div>
            </div>

          </Col>

          <Col md={6}>
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" onChange={(e) => setInputVal2(e.target.value)} />
                </div>

            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={LocalStorage}
              >
                Local Storage
              </button>
            </div>
            </div>
            </div>

          </Col>

          <Col md={6}>
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" onChange={(e) => setInputVal3(e.target.value)} />
                </div>

            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={QueryStringStorage}
              >
                Query String Storage
              </button>
            </div>
            </div>
            </div>

          </Col>

          <Col md={6}>
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" onChange={(e) => setInputVal4(e.target.value)} />
                </div>

            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={QueryStringStorageNew}
              >
                Query String Storage
              </button>
            </div>
            </div>
            </div>

          </Col>

        </Row>
      </Container>
    </>
  );
}
