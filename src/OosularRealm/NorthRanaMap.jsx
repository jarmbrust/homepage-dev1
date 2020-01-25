import React, { useState } from 'react';
import './Oosular.scss';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from '../Images/North_Rana__Oosular.png';


const NorthRanaMap = () => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
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
    </div>
  );
}

export default NorthRanaMap;