import React from 'react';
import './Oosular.scss';
import {
  Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mythos = (props) => {
  return(
    <div className="oosular-background">
      <Container className="col-md-6">
        {mythosDescription(props.myth)}
      </Container>
    </div>
  )
}

function mythosDescription(myth) {
  switch(myth) {
    case 'The Cosmos':
      return theCosmos();
    case 'Gods':
      return gods();
    case 'Angels':
      return angels();
    case 'Demons':
      return demons();
    default:
      return '';
  };
}

function theCosmos() {
  return (
    <div><h3>The Cosmology</h3>
      More to come here, still working out the details.
    </div>
  );
}

function gods() {
  return (
    <div><h3>The Gods</h3>
      Generally distant and "hands off" from the workings of the world.  They seem to be willing to let such matters
      rest in the hands of their proxies the Angels and Demons... at least this is what some believe.
    </div>
  );
}

function angels() {
  return (
    <div><h3>Angels</h3>
      More to come here, still working out the details.
    </div>
  );
}

function demons() {
  return (
    <div><h3>Demons</h3>
      More to come here, still working out the details.
    </div>
  );
}

export default Mythos;
