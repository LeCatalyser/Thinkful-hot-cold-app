import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GuessForm from "./guess-form";
import GuessList from "./guess-list";
import GuessFeedback from "./guess-feedback";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctNumber: Math.floor(Math.random() * 100),
      guesses: [],
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
    this.setState({ guesses: [...this.state.guesses, this.state.input] });
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
        <GuessList guesses={this.state.guesses} />
        <GuessFeedback
          guesses={this.state.guesses}
          correctNumber={this.state.correctNumber}
        />
      </div>
    );
  }
}

export default App; //why would this be here if I am in the root?
