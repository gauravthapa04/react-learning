import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default function WithoutRef() {

    const [InputVal1, setInputVal1] = useState("");
    const [InputVal2, setInputVal2] = useState("Change onclick function");

    function ButtonClick() {
        setInputVal2(InputVal1);
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