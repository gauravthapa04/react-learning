import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ToggleButton from "react-toggle-button";
export default function FetchData() {
  const location = useLocation();
  const GetData = JSON.parse(location.state);
  console.log(GetData);
  const [toggal, setToggal] = useState(GetData.toggaldata);

  function handleChange(){

  }
  function handleChange1(){
    
  }
  function DataToggal(){

  }
  return (
    <>

<Container>
        <Row>
          <div className="card">
            <div className="card-body">
              <Col md={12}>
                <h3>Basic Information</h3>
                <Row>
                  <Col md={6}>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstname"
                        value={GetData.basicinfo.firstname}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastname"
                        value={GetData.basicinfo.lastname}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group mt-3">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={GetData.basicinfo.email}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group mt-3">
                      <label>Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        value={GetData.basicinfo.mobile}
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col md={6} className="mt-2">
                    <span>Gender</span>
                    <div className="form-group d-flex align-items-center">
                      <label htmlFor="male" className="px-2">
                        Male
                      </label>
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                      />
                      <br />
                      <label htmlFor="female" className="px-2">
                        Female
                      </label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <h3>Postal Address</h3>
                <Row>
                  <Col md={12}>
                    <div className="form-group mb-3">
                      <label>Flat / House Number</label>
                      <input
                        type="text"
                        name="address"
                        value={GetData.postaladdress.address}
                        className="form-control"
                        onChange={handleChange1}
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form-group">
                      <label htmlFor="country" className="px-2">
                        Country
                      </label>
                      <select
                        name="country"
                        id="country"

                        value={GetData.postaladdress.country}
                        onChange={handleChange1}
                      >
                        <option value="">Select Country</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form-group">
                      <label htmlFor="state" className="px-2">
                        State
                      </label>
                      <select
                        name="state"
                        id="state"
                        value={GetData.postaladdress.state}
                        onChange={handleChange1}
                      >
                        <option value="">Select State</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Haryana">Haryana</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="form-group">
                      <label htmlFor="city" className="px-2">
                        City
                      </label>
                      <select
                        id="city"
                        name="city"
                        value={GetData.postaladdress.city}
                        onChange={handleChange1}
                      >
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
                    <div className="form-group mt-3" onChange={handleChange1}>
                      <label>Postal Code</label>
                      <input
                        type="text"
                        name="postalcode"
                        value={GetData.postaladdress.postalcode}
                        className="form-control"
                        onChange={handleChange1}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group mt-5">
                      <label className="px-2">
                        Is Correspondence Adrress is same as Postal Address
                      </label>
                      
                      <input
                        type="checkbox"
                        name="check_address"
                        onChange={handleChange1}
                        checked={GetData.postaladdress.check_address}
                      />
                    </div>
                  </Col>
                  <Col md={12}>
                  <div className="form-group mt-3">
                    <ToggleButton 
                      name="toggalbutton"
                      value={toggal}
                      onToggle={DataToggal}
                    />
                    </div>
                  </Col>
                </Row>
              </Col>
              {/* <div className="form-group mt-2">
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
