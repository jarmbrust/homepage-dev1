import React, { Component } from 'react';
import './Pets.css';
// import Dogs from './Dogs';
// import Cats from './Cats';

class Pets extends Component {
  render() {
    return(
      <div className="pets-background">
        <h3>My wife and I have four dogs and two cats that rule over our house.</h3>
      </div>
    );
  }
}

export default Pets;