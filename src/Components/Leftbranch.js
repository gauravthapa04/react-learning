import React, { useState,  useRef } from "react";
import { Row, Col } from "react-bootstrap";
export default function Leftbranch(props) {
  const [ChildInputVal1, setChildInputVal1] = useState(props.xyz);
  const [flag, setFlag] = useState(false);
  //const inputEl = useRef(null);
  //  console.log(props.xyz);
  //   useEffect(() => {
  //     setChildInputVal1(props.xyz);
  //   }, [props.xyz]);
  const {xyz} = props;
  //console.log('test :'+ xyz);
  if(!flag && xyz){
    setChildInputVal1(xyz);
    setFlag(true);
  }
  
  function RestData() {
    setChildInputVal1('');
    props.abc("");
  }

  function SetValueLeft(e) {
    setChildInputVal1(e.target.value);
  }
  function chtoparent(){
    props.abc(ChildInputVal1);
    //setFlag(false);
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
                  value={ChildInputVal1}
                  onChange={SetValueLeft}
                />

            </div>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-primary mt-2"
                    onClick={chtoparent}
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
