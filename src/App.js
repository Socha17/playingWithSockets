import React, { Component } from 'react';
import { subToTimer } from './api';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    subToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  state = {
    timestamp: 'no timestamp yet'
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        THis is ther timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
