import React from "react";

const Pokecard = props =>
    <div className = "col-sm-6 col-md-2 text-center" key = {props.i}>
      <div style = {props.style}>
        <img className = "img-responsive" src = {props.image} alt = {props.title}/>
        <button onClick = {props.onClick} disabled = {props.disabled}>Guess me!</button>
      </div>
    </div>;

export default Pokecard;
