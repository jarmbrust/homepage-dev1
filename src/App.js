import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import Home from './Home';
import DnDStats from './DnDStats';
import GameOfLife from './GameOfLife';
import NotFound from './NotFound';
import Dogs from './Dogs';
import Cats from './Cats';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Navbar.Brand as={NavLink} to="/">James Armbrust</Navbar.Brand>
          <Nav>
            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/dnd_stats">D&D Stats App</Nav.Link>
            <Nav.Link as={NavLink} to="/game_of_life">Game of Life</Nav.Link>
            <Nav.Link as={NavLink} to="/dogs">Our Dogs</Nav.Link>
            <Nav.Link as={NavLink} to="/cats">Our Cats</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dnd_stats" exact component={DnDStats} />
          <Route path="/game_of_life" exact component={GameOfLife} />
          <Route path="/dogs" exact component={Dogs} />
          <Route path="/cats" exact component={Cats} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
