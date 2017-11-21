import React, { Component } from "react";
import API from "../../utils/API";
import {Link} from "react-router-dom";
import "./Vault.css";

class Vault extends Component {
  render(){
    return(
      <div className="page-wrapper">
        <div className="vault-content-wrapper">
          <div className="pokemon-trophy-row">
          </div>
          <div className="pokemon-trophy-row">
          </div>
          <div className="pokemon-trophy-row">
          </div>
        </div>
      </div>
    )
  }
}
export default Vault;