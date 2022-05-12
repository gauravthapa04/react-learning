import React, { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default function WithButtonInput() {

    const inputEl = useRef(null);
    const [InputVal1, setInputVal1] = useState("Change onclick function");

    //Question By sir
    //let lbltext = 'abc';

    function ButtonClick() {
        setInputVal1(inputEl.current.value);
        //console.log('input control value is', inputEl.current.value);
        //console.log('earlier our variable value is', lbltext);
        //console.log('now our variable value is', inputEl.current.value);
    }

    return (
        <>
            <Container className='mt-5'>
                <div className="card">
                    <div className="card-body">
                        <Row>
                            <h1>Task First With Button</h1>
                            <Col md={12}>
                                <div className="form-group">
                                    <label>{InputVal1}</label>
                                    <input type="text" className='form-control' ref={inputEl} />
                                </div>
                                <div className="form-group">
                                    <button type='button' className='btn btn-primary mt-2' onClick={ButtonClick}>Submit</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}