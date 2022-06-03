import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Header.css'
export default function Hedaer() {
  return (
    
      <Container fluid className="nav-container">
        <h1>React Learning</h1>
        <ul>
            <li><Link to="/" className="list-item">Page 1</Link></li>
            <li><Link to="/page2" className="list-item">Page 2</Link></li>
        </ul>
      </Container>
  );
}
