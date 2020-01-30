import React from 'react';
import './Oosular.scss';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink as NavLinkRS,
  UncontrolledCollapse 
} from 'reactstrap'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Moons from './Moons';
import NorthRanaMap from './NorthRanaMap';
import OosularHome from './OosularHome';
import Races from './Races';

const Oosular = (props) => {
  const pcRaces = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Tiefling', 'Goblinoid', 'Lizardfolk', 'Yaun-Ti', 'Orc'];

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
                  <Navbar className="nav-link" color='faded' expand='md' id="toggler">Peoples</Navbar>
                  <UncontrolledCollapse toggler="#toggler">
                    { 
                      pcRaces.map(race =>
                      <NavLinkRS className="sub-link" tag={NavLink} to={`/oosular/peoples/${race}`} exact>{race}</NavLinkRS>
                    )}
                  </UncontrolledCollapse>
                </NavItem>
              </Nav>
            </section>
          </Navbar>
        <Switch>
          <Route path="/oosular" exact component={OosularHome}/>
          <Route path="/oosular/moons" component={Moons} />
          <Route path="/oosular/map" exact component={NorthRanaMap} />
          { 
            pcRaces.map(race =>
            <Route path={`/oosular/peoples/${race}`} exact component={() => <Races race={race}/>}/>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default Oosular;
