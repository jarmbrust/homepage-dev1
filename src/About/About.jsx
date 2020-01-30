import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import './About.scss';

class About extends Component {
  render() {
    return(
      <div className="about-background">
        <Container className="col-md-6">
          <Col className="themed-container" fluid="sm">
            <h2 className="title">About Me (condensed version)</h2>
            <p>
              Born and raised in Minneapolis Minnesota, I earned BA in History from a tiny liberal arts college in the middle of nowhere.
              Worked in libraries for a couple of years, then decided to put myself through college again to earn a BS in
              Computer Science from the University of Iowa.
            </p>
            <p>
              About 12 years ago (after meeting my lovely wife), we decided to exit the midwest and move to Colorado
              to start a new chapter in our life.
            </p>
            <p>
              My hobbies include gaming (both table-top and some computer games), sketching, playing with my dogs, 
              and watching really, really bad movies.
            </p>
          </Col>
        </Container>
      </div>
    );
  };
}

export default About;