import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react'
import Home from './Home';
import GameOfLife from './GameOfLife';
import NotFound from './NotFound';
import Pets from './Pets/Pets';
import DnDStats from './DnDStats/StatSheet';
import About from './About';
import Oosular from './OosularRealm/Oosular';

function App() {
  return (

    <div className="App">
      <Router>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item header>
              {/* <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} /> */}
              James Armbrust
            </Menu.Item>
            
            <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
            <Menu.Item as={NavLink} to="/dnd_stats">D&D Stats</Menu.Item>
            <Menu.Item as={NavLink} to="/game_of_life">Game of Life</Menu.Item>
            <Menu.Item as={NavLink} to="/pets">Pets</Menu.Item>
            <Menu.Item as={NavLink} to="/about">About Me</Menu.Item>

            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className='dropdown icon' />
                  <span className='text'>Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>

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

      <Segment inverted vertical style={{  padding: '5em 0em' }}>
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 1' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 2' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Group 3' />
              <List link inverted>
                <List.Item as='a'>Link One</List.Item>
                <List.Item as='a'>Link Two</List.Item>
                <List.Item as='a'>Link Three</List.Item>
                <List.Item as='a'>Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as='h4' content='Footer Header' />
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image centered size='mini' src='/logo.png' />
          <List horizontal inverted divided link size='small'>
            <List.Item as='a' href='#'>
              Site Map
            </List.Item>
            <List.Item as='a' href='#'>
              Contact Us
            </List.Item>
            <List.Item as='a' href='#'>
              Terms and Conditions
            </List.Item>
            <List.Item as='a' href='#'>
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}

export default App;
