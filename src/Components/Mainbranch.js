import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Leftbranch from "./Leftbranch";
import Rightbranch from "./Rightbranch";
export default function Mainbranch() {
  const [InputVal1, setInputVal1] = useState("");
  const [InputVal2, setInputVal2] = useState("");
  const [InputVal3, setInputVal3] = useState("");
  const [InputVal4, setInputVal4] = useState("");

  function parentToChild() {
    setInputVal3(InputVal1);
    setInputVal4(InputVal2);
    //console.log(InputVal4);
  }

  function ChildData1(ChildInputVal1) {
    setInputVal1(ChildInputVal1);
  }
  function ChildData2(ChildInputVal2) {
    setInputVal2(ChildInputVal2);
  }
  return (
    <>
      <Col md={12}>
        <div class="card">
          <div class="card-body">
            <h2 className="mt-2">Main Branch</h2>
            <div className="form-group">
              <label>Value For Left Inner Branch</label>
              <input
                type="text"
                className="form-control"
                value={InputVal1}
                onChange={(e) => setInputVal1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Value For Right Inner Branch</label>
              <input
                type="text"
                className="form-control"
                value={InputVal2}
                onChange={(e) => setInputVal2(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={parentToChild}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Col>
      <Leftbranch xyz={InputVal3} abc={ChildData1} />
      <Rightbranch nmp={InputVal4} abc={ChildData2} />
    </>
  );
}