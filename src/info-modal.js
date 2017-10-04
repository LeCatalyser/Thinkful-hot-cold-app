import React from "react";

import "./info-modal.css";

export default class InfoModal extends React.Component {
  //this refers to the App.js component?
  onButton(event) {
    event.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>
            This is a Hot or Cold Number Guessing Game. The game goes like this:
          </h1>
          <ul>
            <li>
              1. I pick a random secret number between 1 to 100 and keep it
              hidden.
            </li>
            <li>
              2. You need to guess until you can find the hidden secret number.
            </li>
            <li>
              3. You will get feedback on how close ("hot") or far ("cold") your
              guess is.
            </li>
          </ul>
        </div>

        <div>
          <button onClick={e => this.onButton(e)}>Got it</button> //don't I need
          an anchor tag to link it to the main component?
        </div>
        <div>So, Are you ready? Got It!</div>
      </div>
    );
  }
}
