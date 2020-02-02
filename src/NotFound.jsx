import React, { Component } from 'react';
import './App.scss';

class NotFound extends Component {

  render() {
    return(
      <div className="not-found">
        <header className="App-header">
          Page you were looking for was not found...
        </header>
      </div>
    );
  }
}

export default NotFound;