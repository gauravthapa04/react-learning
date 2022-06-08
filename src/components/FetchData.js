import React from 'react'
import { useLocation } from "react-router-dom";
export default function FetchData() {
    const location = useLocation();
    //console.log(location);
  return (
    <>
        <h4>Fetching Data From Main Page</h4>
        <p>FirstName : {location.state.name.firstname}</p>
        <p>LastName : {location.state.name.lastname} </p>
        <p>Email : {location.state.name.email}</p>
        <p>Mobile : {location.state.name.mobile}</p>
        <p>Gender : {location.state.name.gender}</p>
        <p>Flat / House No. : {location.state.name.address}</p>
        <p>country : {location.state.name.country}</p>
        <p>State : {location.state.name.state}</p>
        <p>City : {location.state.name.city}</p>
        <p>Postal Code : {location.state.name.postalcode}</p>
    </>
  )
}
