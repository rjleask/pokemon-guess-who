import React, { Component } from "react";
import API from "../../utils/API";
import {List,ListItem} from "../../components/List"
import "./Vault.css";
import  myShelfImg from "./myshelf.png";

class Vault extends Component {
  state = {
    pokemon:[]
  }
  componentDidMount(){
    this.getUserInfo();
  }
  getUserInfo = () => {
    API.getUser()
    .then(res => {
      this.setState({
        pokemon: res.data[0].pokemon,
      });
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }
  render () {
    return (
      <div className= "page-wrapper">
      <div className = "container">
        <div className = "panel-body" id="panel-id">
          <List>
            {this.state.pokemon.map((pokemon, i) => {
              return (
                <ListItem key = {i}>
                  <div className = "pokemon-wrapper">
                    <p className = "text-center vault-pokemon-title">
                      {pokemon.title}
                    </p>
                    <a href = {pokemon.link} target = "_blank">
                      <img src = {pokemon.image} style={this.imgStyle} alt = {this.title}/>
                      <div className = "myshelfBox">
                        <img src = {myShelfImg} className = "myshelfimg" alt="decorative"/>
                      </div>
                    </a>

                    <span className = "poketype-span">
                      <strong>Type: </strong> {pokemon.pokeType.map((type, i) => {
                        return (
                          <span key = {i}>
                            {i+1}. {type}&nbsp;
                          </span>
                        );
                      })}
                    </span>
                  </div>
                </ListItem>
              );
            })
            }
          </List>
        </div>
      </div>
      </div>
    );
  }
}
export default Vault;