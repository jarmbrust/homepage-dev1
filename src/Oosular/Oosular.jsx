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

const Oosular = (props) => {

  return (
    <div className="oosular-background">
      <section className='sidebar col-md-3'>
        <Router>
        <Navbar color='faded' expand='md'>
          <section className='sidebar2'>
            <Nav vertical navbar>
              <NavItem>
                <NavLinkRS tag={NavLink} to="/oosular/map" exact>Maps</NavLinkRS>
              </NavItem>

              <NavItem>
                <NavLinkRS tag={NavLink} to="/oosular/moons" exact>Lunar Calendar</NavLinkRS>
              </NavItem>

            </Nav>
          </section>
        </Navbar>
        </Router>
      </section>
      <Switch>
        {/* <Route path="/" exact component={OosularHome} /> */}
        <Route path="/oosular" exact component={OosularHome}/>
        <Route path="/oosular/moons" component={Moons} />
        <Route path="/oosular/map" exact component={NorthRanaMap} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default Oosular;
