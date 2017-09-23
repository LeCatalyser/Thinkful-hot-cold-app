import React from "react";

import "./guess-feedback.css";

export default function GuessFeedback(props) {
  const last = props.guesses.slice(-1)[0];
  if (last === undefined) {
    return <section>Take a Guess</section>;
  }
  if (last > props.correctNumber) {
    return <section>Cold</section>;
  }
  return <section>Hot</section>;
}
