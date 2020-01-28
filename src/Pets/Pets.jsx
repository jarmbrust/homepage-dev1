import React, { Component } from 'react';
import './Pets.css';
import Dogs from './Dogs';
import Cats from './Cats';
import { Container } from 'reactstrap';

class Pets extends Component {
  render() {
    return(
      <div className="pets-background">
        <Container  className="col-md-6">
          <h3>My wife and I have four dogs and two cats that rule over our house.</h3>
          <br />
          <Dogs />
          <br />
          <Cats />
        </Container>
      </div>
    );
  }
}

export default Pets;
