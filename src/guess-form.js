import React from "react";

export default function GuessForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <h1 class="hot">Hot or Cold</h1>
      <h2 class="guess">Make a Guess!</h2>
      <input
        type="number"
        onChange={e => props.onChange(parseInt(e.target.value))}
        placeholder="Enter your Guess"
      />
      <label />
      <button>Guess</button>
    </form>
  );
}
