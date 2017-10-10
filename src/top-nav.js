import React from "react";
import "./top-nav.css";
export default class TopNav extends React.Component {
  onNewGame(event) {
    event.preventDefault();
    if (this.props.onNewGame) {
      this.props.onNewGame();
    }
  }
  onInfo(event) {
    event.preventDefault();
    if (this.props.onInfo) {
      this.props.onInfo();
    }
  }
  render() {
    return (
      <nav>
        <ul class="links" className="clearfix">
          <li>
            <a className="What" onClick={e => this.onInfo(e)}>
              How do I play?
            </a>
          </li>
          <li>
            <a className="new" onClick={e => this.onNewGame(e)}>
              New Game
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
