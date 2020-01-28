import React, { Component } from 'react';
import './Home.scss';
import {
  Container,
  Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Container className="col-md-6">
          <Col className="themed-container" fluid="sm">
            <h1>Welcome to JamesArmbrust.dev!</h1>
            <p>Hello.</p>
            <p>
              This site is a work in progress in general, I am still trying to determine what to show on most of the pages.
              I am mostly using it at this point to host the realm of Oosular, my D&D homebrew campagne and to
              practice some of my React skills.
            </p>
            <p>
              More will come soon...
            </p>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Home;
