import React from "react";

import "./guess-feedback.css";

export default function GuessFeedback(props) {
  const last = props.guesses.slice(-1)[0];
  if (last === undefined) {
    return <section>Take a Guess</section>;
  }
  const distance = Math.abs(last - props.correctNumber);
  if (distance === 0) {
    return <section>Correct Number</section>;
  } else if (distance < 2) {
    return <section>Hot</section>;
  }
  return <section>Cold</section>;
}
