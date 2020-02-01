import React, { useState } from 'react';
import './Oosular.scss';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontierMap1 from '../Images/frontier_map1_players.png';

const Maps = () => {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="oosular-background">
      <Container className="col-md-6">
        <h2>Maps of Oosular</h2>
        <p>Map of the eastern frontier to Odonburn.</p>
        <img className="frontier-map1" src={FrontierMap1} alt="Frontier Map Intro" width="536.4" height="446.4"></img> 
        <Button onClick={toggle}>Larger Map</Button>
        <Modal isOpen={modal} toggle={toggle} className="east-frontier" size="lg" style={{maxWidth: '1250px', width: '100%'}}>
          <ModalHeader toggle={toggle}>Eastern Frontier</ModalHeader>
          <ModalBody>
            <img src={FrontierMap1} alt="Frontier Map Intro" width="1225"></img>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
}

export default Maps;