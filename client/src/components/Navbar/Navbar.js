import React, { Component } from "react";
import Login from "../loginBtn";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <p className="nav-stuff  login-link"><Login /></p>
      <p className="nav-stuff  play-link"><Link to="/game">Play</Link></p>
      <p className="nav-stuff  pokedex-link"><Link to="/pokedex">Pokedex</Link></p>
      <header className="nav-title">Pokemon Guess Who</header>
      <p className="nav-stuff dummy-box" style={{visibility:"hidden"}}>Login</p> 
      <p className="nav-stuff" style={{visibility:"hidden"}}>PLay</p>      
      <p className="nav-stuff" style={{visibility:"hidden"}}>Pokedex</p>                
    </div>
  );
};
export default  Navbar;