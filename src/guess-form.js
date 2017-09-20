import React from "react";

export default function GuessForm(props) {
  return (
    <form>
      <h1 class="hot">Hot or Cold</h1>
      <h2 class="guess">Make a Guess!</h2>
      <input placeholder="Enter your Guess" />
      <label />
      <button>Guess</button>
    </form>
  );
}
