import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessForm from './guess-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctNumber: 18,
      Guesses: [],
      correctGuess: []
    }
  }



  render() {
    return (
      <div className="App">
        <GuessForm/>
      </div>
    );
  }
}

export default App;
