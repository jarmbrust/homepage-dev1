
import React, { Component } from 'react';
import './Oosular.scss';
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Container
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Races from './Races';



class Peoples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onClickHandler = event => {
    const value = event.target.innerHTML;
    this.setState({ value })
  }

  render() {
    const pcRaces = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Tiefling', 'Goblinoid', 'Lizardfolk', 'Yaun-Ti', 'Orc']
    return (
      <div className="oosular-background">
        <Container className="col-md-6">
          <h2>Peoples and Races of the Continents of Rana</h2>
          <p>There are a diverse number of humanoids that live in the northern and southern continents of Rana...</p>

          <UncontrolledButtonDropdown id="race-dropdown" text="Select Race">
            <DropdownToggle caret>
              Select Race
            </DropdownToggle>
            <DropdownMenu>
              { pcRaces.map(race =>
                <DropdownItem key={race} onClick={this.onClickHandler}>{race}</DropdownItem>
              )}
            </DropdownMenu>
          </UncontrolledButtonDropdown>
          <div className='race-description'><Races race={this.state.value}/></div>
          <br />
          <hr />
        {/* <div>
          <p>There are other groups and peoples as well in North and South Rana...</p>
          <ul>
            <li>stuff</li>
            <li>things</li>
          </ul>
        </div> */}
      </Container>
    </div>
  );
  }
}

export default Peoples;
