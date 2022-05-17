import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import validator from 'validator'
export default function InputLowercase() {

    const [InputVal2, setInputVal2] = useState("");
    // function HandleOnChnage(e) {
    //     setInputVal2(e.target.value.toLowerCase());
    // }
    const validate = (inputText) =>{
        setInputVal2(validator.trim(inputText).toLowerCase());
    }
    return (
        <>
            <Container className='mt-5'>
                <div className="card">
                    <div className="card-body">
                        <Row>
                            <h1>Input Value In Lowercase</h1>
                            <Col md={12}>
                                <div className="form-group">
                                    <label>{InputVal2}</label>
                                    <input type="text" className='form-control' onChange={(e) => validate(e.target.value)} />
                                    <p>Count Word {InputVal2.length}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}
