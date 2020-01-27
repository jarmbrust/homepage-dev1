import React from 'react';
import './Oosular.scss';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink as NavLinkRS
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
import Peoples from './Peoples';

const Oosular = () => {
  return (
    <div className="oosular-background">
      {/* <section> */}
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
                  <NavLinkRS tag={NavLink} to="/oosular/peoples" exact>Peoples</NavLinkRS>
                </NavItem>
              </Nav>
            </section>
          </Navbar>
        <Switch>
          <Route path="/oosular" exact component={OosularHome}/>
          <Route path="/oosular/moons" component={Moons} />
          <Route path="/oosular/map" exact component={NorthRanaMap} />
          <Route path="/oosular/peoples" exact component={Peoples} />
        </Switch>
      </Router>
      {/* </section> */}
    </div>
  );
}

export default Oosular;
