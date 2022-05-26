import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
export default function Leftbranch(props) {
  const [ChildInputVal1, setChildInputVal1] = useState("");

  useEffect(() => {
    setChildInputVal1(props.xyz);
  }, [props.xyz]);

  function RestData() {
    setChildInputVal1("");
    props.abc("");
  }

  return (
    <>
      <Col md={6} className="mt-2">
        <div class="card">
          <div class="card-body">
            <h2 className="mt-2">Left Branch</h2>
            <div className="form-group">
              <label>Value Form Main Branch</label>
              <input
                type="text"
                className="form-control"
                value={ChildInputVal1}
                onChange={(e) => setChildInputVal1(e.target.value)}
              />
            </div>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => props.abc(ChildInputVal1)}
                  >
                    Submit
                  </button>
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={RestData}
                  >
                    Reset
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </>
  );
}