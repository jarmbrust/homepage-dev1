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
              This site is a work in progress and I am still trying to determine what to show on most of the pages.
              Originally I built it to practice my React skills, however, right now it is mostly a showcase for my
              D&D homebrew campaign.  But in time it will expand to more uses I am sure.
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
