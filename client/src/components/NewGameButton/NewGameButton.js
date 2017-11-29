import React from "react";

const NewGameButton = props =>
    <button onClick={props.onClick} className = "btn-danger">
      New Game
    </button>;

export default NewGameButton;
