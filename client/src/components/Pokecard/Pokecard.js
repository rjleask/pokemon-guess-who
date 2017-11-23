import React from "react";
import "./Pokecard.css";

const Pokecard = props =>
    <div className = "text-center pokemoncard-box" onMouseEnter = {props.onMouseEnter} key = {props.i}>
      <div style = {props.style} className = {`${props.cardStyle} bingo`}>
        <img className = "img-responsive" src = {props.image} alt = {props.title}/>
        <button className = "btn-info" onClick = {props.onClick} disabled = {props.disabled}>Guess me!</button>
      </div>
    </div>;

export default Pokecard;
