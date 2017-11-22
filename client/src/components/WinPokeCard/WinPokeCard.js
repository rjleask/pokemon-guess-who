import React from "react";
import NewGameButton from "../NewGameButton";

const Pokecard = props =>
    <div className = "text-center">
      <div style = {props.style}>
        Congrats! You caught {props.title}
        <img className = "img-responsive" src = {props.image} alt = {props.title}/>
        <NewGameButton
          onClick = {props.onClick}
        />
      </div>
    </div>;

export default Pokecard;
