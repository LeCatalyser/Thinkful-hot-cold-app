import React from "react";

import "./guess-form.css";

export default function GuessForm(props) {
  return (
    <form onSubmit={props.onUserGuessed}>
      <h1 class="hot">Hot or Cold</h1>
      <h2 class="guess">Make a Guess!</h2>
      <input
        type="number"
        onChange={e => props.onChange(parseInt(e.target.value, 10))}
        value={props.value}
        maxLength="3"
        autoComplete="off"
        required
      />
      <label />
      <button>Guess</button>
    </form>
  );
}
