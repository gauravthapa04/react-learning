import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Mainbranch from "./Components/Mainbranch";
import { Container, Row } from "react-bootstrap";
function App() {
  const REACT_VERSION = React.version;
  console.log(REACT_VERSION);
  return (
    <>
      <Container>
        <Row>
          <Mainbranch />
        </Row>
      </Container>
    </>
  );
}

export default App;
