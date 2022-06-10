
import React from "react";
import Hedaer from "./components/Hedaer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import FetchData from "./components/FetchData";
function App() {
  return (
    <>
      <Container className="mt-2">
        <Row>
          <h2>React Learning</h2>
          <BrowserRouter>
            {/* <Hedaer /> */}
            <Routes>
              <Route path="/" element={<Page6 />}></Route>
              <Route path="/page2" element={<Page2 />}></Route>
              <Route path="/fetchdata" element={<FetchData />}></Route>
              <Route path="/page3" element={<Page3 />}></Route>
              <Route path="/page4" element={<Page4 />}></Route>
              <Route path="/page5" element={<Page5 />}></Route>
            </Routes>
          </BrowserRouter>
        </Row>
      </Container>
    </>
  );
}

export default App;
