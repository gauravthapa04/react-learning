import React, { useState,  useRef } from "react";
import { Row, Col } from "react-bootstrap";
export default function Leftbranch(props) {
  const [ChildInputVal1, setChildInputVal1] = useState(props.xyz);
  const inputEl = useRef(null);
  //  console.log(props.xyz);
  //   useEffect(() => {
  //     setChildInputVal1(props.xyz);
  //   }, [props.xyz]);

  function RestData() {
    inputEl.current.value = '';
    props.abc("");
  }

  function SetValueLeft() {
    setChildInputVal1(inputEl.current.value);
  }

  return (
    <>
      <Col md={6} className="mt-2">
        <div className="card">
          <div className="card-body">
            <h2 className="mt-2">Left Branch</h2>
            <div className="form-group">
              <label>Value Form Main Branch</label>

                <input
                  type="text"
                  className="form-control"
                  defaultValue={props.xyz}
                  ref={inputEl}
                  onChange={SetValueLeft}
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
