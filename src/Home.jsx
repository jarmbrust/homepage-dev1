import React, { Component } from 'react';
import './Home.css';
import 'semantic-ui-css/semantic.min.css'

import {
  Container,
  Header
} from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Welcome to JamesArmbrust.dev!</Header>
          <p>Hello.</p>
          <p>This site is a work in progress, so hopefully you'll see more here soon!</p>
        </Container>
      </div>
    );
  }
}

export default Home;