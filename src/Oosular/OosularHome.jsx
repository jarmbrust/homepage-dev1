import React from 'react';
import './Oosular.scss';
import {
  Container
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const OosularHome = () => {
    return (
      <div className="oosular-background">
        <Container className="col-md-6">
          <br />
          <h1 className="title">The Lands of Oosular</h1>
          <p>Text will go here about the lands of Oosular...</p>
        </Container>
      </div>
    );
}
  
export default OosularHome;
