import React, { Component } from 'react';
import './App.css';
import {appointments} from './data/appointments'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <pre>{JSON.stringify(appointments, null, '  ')}</pre>
        </header>
      </div>
    );
  }
}

export default App;
