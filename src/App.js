import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GuessForm from "./guess-form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctNumber: 18,
      Guesses: [],
      correctGuess: []
    };
  }

  guessTries(e) {
    e.preventDefault();
    console.log(this.state);
    if (this.state.input === this.state.correctNumber) {
      alert("correct answer");
    } else {
      alert("incorrect answer");
    }
  }

  guessResponse(guess) {
    this.setState({ input: guess });
  }

  render() {
    return (
      <div className="App">
        <GuessForm
          onSubmit={guess => this.guessTries(guess)}
          onChange={guess => this.guessResponse(guess)}
        />
      </div>
    );
  }
}

export default App;
