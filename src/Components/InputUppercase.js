import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default function InputUppercase() {

const [InputVal2, setInputVal2] = useState("");
function HandleOnChnage(e) {
    setInputVal2(e.target.value.toUpperCase());
}

    return (
        <>
            <Container className='mt-5'>
                <div className="card">
                    <div className="card-body">
                        <Row>
                            <h1>Input Value In Uppercase</h1>
                            <Col md={12}>
                                <div className="form-group">
                                    <label>{InputVal2}</label>
                                    <input type="text" className='form-control' onChange={HandleOnChnage} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}
