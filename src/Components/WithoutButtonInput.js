import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
export default function WithoutButtonInput() {
    const [InputVal2, setInputVal2] = useState("Change onchange function");
    function HandleOnChnage(e) {

        setInputVal2(e.target.value);
        
    }
    return (
        <>
            <Container className='mt-5'>
                <div className="card">
                    <div className="card-body">
                        <Row>
                            <h1>Task Second Without Button</h1>
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