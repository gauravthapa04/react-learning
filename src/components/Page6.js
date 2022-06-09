import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Page6() {
const navigate = useNavigate();
const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    gender: "",
});
const [portalinfo, setPortalinfo] = useState({
  address: "",
  country: "",
  state: "",
  city: "",
  postalcode: "",
});
    
    function handleChange(evt){
        const value = evt.target.value;
        setData({
            ...data,
            [evt.target.name]: value
          });
    }
    
    function handleChange1(evt){
      const value1 = evt.target.value;
      setPortalinfo({
          ...portalinfo,
          [evt.target.name]: value1
        });
    }

    function DataSubmit(){

      const JsonData = {'basicinfo' : data, 'postaladdress' : portalinfo };
      //const JsonData1 = {'postaladdress' : portalinfo };
      const obj = JSON.stringify(JsonData);
      navigate("/fetchdata",{state:obj});
      //console.log(obj);
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
                      <input type="text" name="firstname" className="form-control" onChange={handleChange} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" name="lastname" className="form-control" onChange={handleChange} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="email" className="form-control" onChange={handleChange} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label>Mobile</label>
                      <input type="text" name="mobile" className="form-control" onChange={handleChange} />
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
                        checked={data.gender === "male"}
                        onChange={handleChange}
                      />
                      <br />
                      <label htmlFor="female"> Female</label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={data.gender === "female"}
                        onChange={handleChange}
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
                      <input type="text" name="address" className="form-control" onChange={handleChange1} />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
                      <select name="country" id="country" value={data.country} onChange={handleChange1}>
                        <option value="">Select Country</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <select name="state" id="state" value={data.state} onChange={handleChange1}>
                        <option value="">Select State</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Haryana">Haryana</option>
                      </select>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                        <select id="city" name="city" value={data.city} onChange={handleChange1}>
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
                    <div className="form-group" onChange={handleChange1}>
                      <label>Postal Code</label>
                      <input type="text" name="postalcode" className="form-control" onChange={handleChange1}/>
                    </div>
                  </Col>
                </Row>
              </Col>
              <div className="form-group">
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={DataSubmit}
              >
                Submit
              </button>
            </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
