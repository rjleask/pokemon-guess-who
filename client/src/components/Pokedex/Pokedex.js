import React, { Component } from "react";
import { List, ListItem } from "../List";
import API from "../../utils/API";

class Pokedex extends Component {

  state = {
    pokemon: []
  };

  componentDidMount () {
    this.fillPokedex();
    this.setState({
      inputCheck: ""
    });
  };

  fillPokedex = () => {
    API.fillPokedex()
      .then(res => {
        this.setState({
          pokemon: res.data
        });
      })
      .catch(err => console.log(err));
  };

  imgStyle = {
    height: "100px"
  };

  render () {
    return (
      <div className = "col-s-12">
        <div className="panel-heading">
					<h3 className="panel-title">Pokedex</h3>
				</div>
        <div className = "panel-body">
          <List>
            {this.state.pokemon.map((pokemon, i) => {
              return (
                <ListItem key = {i}>
                  <div>
                    <p className = "text-center">
                      {pokemon.title}
                    </p>
                    <a href = {pokemon.link} target = "_blank">
                      <img src = {pokemon.image} style={this.imgStyle} alt = {this.title}/>
                    </a>
                    <p>
                      {pokemon.pokeType.map((type, i) => {
                        return (
                          <span key = {i}>
                            {type}&nbsp;
                          </span>
                        );
                      })}
                    </p>
                  </div>
                </ListItem>
              );
            })
            }
          </List>
        </div>
      </div>
    );
  }
}

export default Pokedex;
