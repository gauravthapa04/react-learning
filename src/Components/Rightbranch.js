import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
export default function Rightbranch(props) {
  const [ChildInputVal2, setChildInputVal2] = useState(props.nmp);
  const [checks, setChecks] = useState("")
  const {nmp} = props;
  //const inputEl = useRef(null);
  //console.log(props.nmp);
  // useEffect(() => {
  //   setChildInputVal2(props.nmp);
  // }, [props.nmp]);

 
  const data = props.nmp;
  if(data != checks){
    setChildInputVal2(data);
    setChecks(nmp);
  }


  function SetValue(e){
    setChildInputVal2(e.target.value);
  }
  function RestData() {
    setChildInputVal2('');
    //inputEl.current.value = '';
    props.abc("");
  }

  return (
    <>
      <Col md={6} className="mt-2">
        <div className="card">
          <div className="card-body">
            <h2 className="mt-2">Right Branch</h2>
            <div className="form-group">
              <label>Value Form Main Branch</label>

                <input type="text" className="form-control" value={ChildInputVal2}  onChange={SetValue} />
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