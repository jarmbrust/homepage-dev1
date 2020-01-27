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
import Map from '../Images/North_Rana__Oosular.png';

const NorthRanaMap = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="oosular-background">
      <Container className="col-md-6">
        <h2>Maps of Oosular</h2>
        <p>Map of the western portion of the continent of North Rana.</p>
        <img src={Map} alt="Oosular Map, North Rana" width="710.5" height="408.5"></img>
        <Button onClick={toggle}>Larger Map</Button>
        <Modal isOpen={modal} toggle={toggle} className="W-RanaMap" size="lg" style={{maxWidth: '1250px', width: '100%'}}>
          <ModalHeader toggle={toggle}>Northwestern Rana</ModalHeader>
          <ModalBody>
            <img src={Map} alt="Oosular Map, North Rana" width="1225"></img>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
}

export default NorthRanaMap;
