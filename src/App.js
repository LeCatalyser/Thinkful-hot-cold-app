import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GuessForm from "./guess-form";
import GuessList from "./guess-list";
import GuessFeedback from "./guess-feedback";
import TopNav from "./top-nav.js";
import GuessCount from "./guess-count.js";

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
    } else {
    }
    this.setState({
      guesses: [...this.state.guesses, this.state.input],
      input: ""
    });
  }

  guessResponse(guess) {
    this.setState({ input: guess });
  }

  newGame() {
    this.setState({
      guesses: [],
      input: ""
    });
  }

  render() {
    return (
      <div className="App">
        <GuessForm
          onUserGuessed={guess => this.guessTries(guess)}
          onChange={guess => this.guessResponse(guess)}
          value={this.state.input}
        />
        <GuessList guesses={this.state.guesses} />
        <GuessFeedback
          guesses={this.state.guesses}
          correctNumber={this.state.correctNumber}
        />
        <TopNav onNewGame={() => this.newGame()} />
      </div>
    );
  }
}

export default App; //why would this be here if I am in the root?
