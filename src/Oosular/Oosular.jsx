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
import Maps from './Maps';
import OosularHome from './OosularHome';
import Races from './Races';
import Mythos from './Mythos';

const Oosular = () => {
  const pcRaces = ['Human', 'Elf', 'Dwarf', 'Halfling', 'Tiefling', 'Goblinoid', 'Lizardfolk', 'Yaun-Ti', 'Orc'];
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
                  <Navbar className="nav-link" color='faded' expand='md' id="race-toggler">Peoples</Navbar>
                  <UncontrolledCollapse toggler="#race-toggler">
                    { 
                      pcRaces.map((race, r) =>
                      <NavLinkRS className="sub-link" key={r} tag={NavLink} to={`/oosular/peoples/${race}`} exact>{race}</NavLinkRS>
                    )}
                  </UncontrolledCollapse>
                </NavItem>
                <NavItem>
                  <Navbar className="nav-link" color='faded' expand='md' id="mythos-toggler">Mythos</Navbar>
                  <UncontrolledCollapse toggler="#mythos-toggler">
                    { 
                      mythos.map((myth, m) =>
                      <NavLinkRS className="sub-link" key={m} tag={NavLink} to={`/oosular/peoples/${myth}`} exact>{myth}</NavLinkRS>
                    )}
                  </UncontrolledCollapse>
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
            <Route path={`/oosular/peoples/${race}`} key={r}  exact component={() => <Races race={race}/>}/>
          )}
          { mythos.map((myth, m) => 
            <Route path={`/oosular/peoples/${myth}`} key={m}  exact component={() => <Mythos myth={myth}/>}/>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default Oosular;
