import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from './Home';
import GameOfLife from './GameOfLife/GameOfLife';
import NotFound from './NotFound';
import Pets from './Pets/Pets';
import DnDStats from './DnDStats/StatSheet';
import About from './About/About';
import Oosular from './Oosular/Oosular';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavLinkRS,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Media
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let imgStyle = {
    maxHeight: '24px',
    maxWidth: '24px'
  }

  return (
    <div>
      <Router>
        <Navbar color="dark" dark sticky="top" expand="md">
          <NavbarBrand href="/">James Armbrust</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLinkRS tag={NavLink} to="/" exact>Home</NavLinkRS>
            </NavItem>
            <NavItem>
              <NavLinkRS tag={NavLink} to="/pets">Pets</NavLinkRS>
            </NavItem>
            <NavItem>
              <NavLinkRS tag={NavLink} to="/about">About Me</NavLinkRS>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                D&D/Hobbies
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={NavLink} to="/dnd_stats">
                  Character Creator
                </DropdownItem>
                <DropdownItem tag={NavLink} to="/oosular">
                  Oosular Realm
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  More stuff to come
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText><Media style={imgStyle} object src="/logo.png" alt="Generic cartoon image" /></NavbarText>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dnd_stats" exact component={DnDStats} />
          <Route path="/game_of_life" exact component={GameOfLife} />
          <Route path="/pets" exact component={Pets} />
          <Route path="/oosular" exact component={Oosular} />
          <Route path="/about" exact component={About} />
          <Route component={NotFound} />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
