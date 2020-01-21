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
        <Container>
          <Col className="themed-container" fluid="sm">
            <h1>Welcome to JamesArmbrust.dev!</h1>
            <p>Hello.</p>
            <p>This site is a work in progress, so hopefully you'll see more here soon!</p>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Home;