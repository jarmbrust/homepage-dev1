import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import './About.css';

class About extends Component {
  render() {
    return(
      <div className="about-background">
        <Container>
          <h1 className="title">About Me (condensed version)</h1>
          <p>Born and raised in Minneapolis Minnesota, I earned BA in History from a tiny liberal arts college in the middle of nowhere.
            Worked in libraries for awhile, then decided to put myself through college again to earn a BS in Computer Science from the University of Iowa.</p>
          <p>About 12 years ago, and after meeting my lovely wife, we decided to exit the midwest and travel to Colorado.</p>
          <p>My hobbies include gaming (both table-top and some computer games), sketching, playing with my dogs, 
            and watching really, really bad movies.</p>
        </Container>
      </div>
    );
  }
}

export default About;