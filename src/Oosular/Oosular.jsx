import React, { Component } from 'react';
import './Oosular.scss';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink as NavLinkRS,
  Collapse
} from 'reactstrap'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Moons from './Moons';
import Maps from './Maps';
import OosularHome from './OosularHome';
import Races from './Races';
import Mythos from './Mythos';
import Information from './Information';

class Oosular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRaceOpen: false,
      isMythosOpen: false
    };

    this.onClickRace = this.onClickRace.bind(this);
    this.onClickMythos = this.onClickMythos.bind(this);
  }
 
  onClickRace(event) {
    this.setState({
      isRaceOpen: !this.state.isRaceOpen,
      isMythosOpen: false
    });
  }
  onClickMythos(event) {
    this.setState({
      isMythosOpen: !this.state.isMythosOpen,
      isRaceOpen: false
    });
  }

  render() {
    const pcRaces = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Tiefling', 'Goblinoid', 'Lizardfolk', 'Orc', 'Yaun-Ti'];
    const mythos = ["The Cosmos", "Gods", "Angels", "Demons"];

    return ( 
      <div className="oosular-background">
          <Router>
            <Navbar color='faded' expand='md'>
              <section className='sidebar col-md-3'>
                <Nav vertical navbar className='sidebar-divider'>
                  <NavItem>
                    <NavLinkRS tag={NavLink} to="/oosular" exact>Intro</NavLinkRS>
                  </NavItem>
                  <NavItem>
                    <NavLinkRS tag={NavLink} to="/oosular/map" exact>Maps</NavLinkRS>
                  </NavItem>
                  <NavItem>
                    <NavLinkRS tag={NavLink} to="/oosular/moons" exact>Lunar Calendar</NavLinkRS>
                  </NavItem>
                  <NavItem>
                    <Navbar className="nav-link" color='faded' expand='md' onClick={this.onClickRace}>Peoples</Navbar>
                    <Collapse isOpen={this.state.isRaceOpen}>
                      { 
                        pcRaces.map((race, r) =>
                        <NavLinkRS className="sub-link" key={r} tag={NavLink} to={`/oosular/peoples/${race}`} exact>{race}</NavLinkRS>
                      )}
                    </Collapse >
                  </NavItem>
                  <NavItem>
                    <Navbar className="nav-link" color='faded' expand='md' onClick={this.onClickMythos}>Mythos</Navbar>
                    <Collapse isOpen={this.state.isMythosOpen}>
                      { 
                        mythos.map((myth, m) =>
                        <NavLinkRS className="sub-link" key={m} tag={NavLink} to={`/oosular/peoples/${myth}`} exact>{myth}</NavLinkRS>
                      )}
                    </Collapse>
                  </NavItem>
                  <NavItem>
                    <NavLinkRS tag={NavLink} to="/oosular/information" exact>General Info</NavLinkRS>
                  </NavItem>
                </Nav>
              </section>
            </Navbar>
          <Switch>
            <Route path="/oosular" exact component={OosularHome}/>
            <Route path="/oosular/moons" component={Moons} />
            <Route path="/oosular/map" exact component={Maps} />
            { 
              pcRaces.map((race, r) =>
              <Route path={`/oosular/peoples/${race}`} key={r} exact component={() => <Races race={race}/>}/>
            )}
            { mythos.map((myth, m) => 
              <Route path={`/oosular/peoples/${myth}`} key={m} exact component={() => <Mythos myth={myth}/>}/>
            )}
          </Switch>
          <Route path="/oosular/information" exact component={Information} />
        </Router>
      </div>
    );
  }
}

export default Oosular;
