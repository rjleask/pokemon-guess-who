import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./NotFound.css";

const NotFound = () =>
<div className="page">
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1 className="title">404 error</h1>
        <img src="https://vignette.wikia.nocookie.net/pokemon/images/3/3e/114Tangela.png/revision/latest/scale-to-width-down/200?cb=20140328205759" alt="Tangela" />
        </Jumbotron>
      </Col>
    </Row>
  </Container>
</div>

export default NotFound;