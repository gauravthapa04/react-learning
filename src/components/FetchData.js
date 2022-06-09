import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export default function FetchData() {
    const location = useLocation();
    const GetData = JSON.parse(location.state);
    console.log(GetData);
  return (
    <>

<Container>
        <Row>
          <div className="card">
            <div className="card-body">
            <h2>Fetching Data From Main Page</h2>
              <Col md={12}>
                <h3>Basic Information</h3>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" name="firstname" value={GetData.basicinfo.firstname} className="form-control" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" name="lastname" value={GetData.basicinfo.lastname} className="form-control"/>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="email" value={GetData.basicinfo.email} className="form-control"/>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Mobile</label>
                      <input type="text" name="mobile" value={GetData.basicinfo.mobile} className="form-control" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="male">Male</label>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={GetData.basicinfo.gender === "male"}
                      />
                      <br />
                      <label htmlFor="female"> Female</label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={GetData.basicinfo.gender === "female"}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <h3>Postal Address</h3>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Flat / House Number</label>
                      <input type="text" name="address" value={GetData.postaladdress.address} className="form-control" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <select name="country" id="country" value={GetData.postaladdress.country}>
                        <option value="">Select Country</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <select name="state" id="state" value={GetData.postaladdress.state}>
                        <option value="">Select State</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Haryana">Haryana</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                        <select id="city" name="city" value={GetData.postaladdress.city}>
                        <option value="">Select City</option>
                        <option value="Ambala">Ambala</option>
                        <option value="Asandh">Asandh</option>
                        <option value="Ateli Mandi">Ateli Mandi</option>
                        <option value="Bahadurgarh">Bahadurgarh</option>
                        <option value="Bara Uchana">Bara Uchana</option>
                        <option value="Barwala">Barwala</option>
                        </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input type="text" name="postalcode" value={GetData.postaladdress.postalcode} className="form-control"/>
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* <div className="form-group">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={DataSubmit}
              >
                Submit
              </button>
            </div> */}
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}
