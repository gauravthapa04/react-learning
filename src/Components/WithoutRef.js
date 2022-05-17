import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default function WithoutRef() {

    const [InputVal1, setInputVal1] = useState("");
    const [InputVal2, setInputVal2] = useState("Change value on button click function");

    function ButtonClick() {
        //console.log("inital value of input is", InputVal2);
        //console.log("onChange Input value of input is", InputVal1);
        setInputVal2(InputVal1);
        //console.log("on button click Input value of input is", InputVal2);
    }
    return (
        <Container className='mt-5'>
            <div className="card">
                <div className="card-body">
                    <Row>
                        <h1>OnClick Value Change Without Ref Hook</h1>
                        <Col md={12}>
                            <div className="form-group">
                                <label>{InputVal2}</label>
                                <input type="text" className='form-control' onChange={(e) => setInputVal1(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <button type='button' className='btn btn-primary mt-2' onClick={ButtonClick}>Submit</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}