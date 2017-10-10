import React, { Component } from "react";
import "./App.css";
import GuessForm from "./guess-form";
import GuessList from "./guess-list";
import GuessFeedback from "./guess-feedback";
import TopNav from "./top-nav.js";
import InfoModal from "./info-modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctNumber: Math.floor(Math.random() * 100),
      guesses: [],
      correctGuess: [],
      input: "",
      gameInstructions: false
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
      input: "",
      correctNumber: Math.floor(Math.random() * 100)
    });
  }

  gameInstructions() {
    this.setState({
      gameInstructions: true
    });
  }

  closesInfo(e) {
    this.setState({
      gameInstructions: false
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
        <TopNav
          onNewGame={() => this.newGame()}
          onInfo={() => this.gameInstructions()}
        />
        {this.state.gameInstructions && (
          <InfoModal onClose={() => this.closesInfo()} />
        )}
      </div>
    );
  }
}

export default App; //why would this be here if I am in the root?
