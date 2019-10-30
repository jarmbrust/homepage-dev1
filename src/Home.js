import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  render() {
    return(
      <div className="Home">
        <header className="App-header">
          <div className="intro-text">
            <h3>Welcome to jamesarmbrust.dev!</h3>
            <br />
            <p>This site is only a few days old right now, so still a WIP, but stay tuned for more content!</p>
            <p>For now, there are a few pages above of misc work and information about me.</p>
            <br />
            <p>The sourcecode for this site is located <a target="_blank" rel="noopener noreferrer" href="https://github.com/jarmbrust/homepage-dev1">here</a>.</p>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;