import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
export default function Rightbranch(props) {
  const [ChildInputVal2, setChildInputVal2] = useState("");

  useEffect(() => {
    setChildInputVal2(props.nmp);
  }, [props.nmp]);

  function RestData() {
    setChildInputVal2("");
    props.abc("");
  }

  return (
    <>
      <Col md={6} className="mt-2">
        <div class="card">
          <div class="card-body">
            <h2 className="mt-2">Right Branch</h2>
            <div className="form-group">
              <label>Value Form Main Branch</label>
              <input
                type="text"
                className="form-control"
                value={ChildInputVal2}
                onChange={(e) => setChildInputVal2(e.target.value)}
              />
            </div>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={() => props.abc(ChildInputVal2)}
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