import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

class Pokedex extends Component {
  
  state = {
    pokemon: []
  };
  
  componentDidMount () {
    this.fillPokedex();
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
    console.log(this.state.pokemon);
    return (
      <div className = "container">
        <div className="panel-heading">
					<h3 className="panel-title">Pokedex</h3>
				</div>
        <div className = "panel-body">
          <List>
            {this.state.pokemon.map((pokemon, i) => {
              return (
                <ListItem key = {i}>
                  <p>
                    <p className = "text-center">
                      {pokemon.title}
                    </p>
                    <a href = {pokemon.link} target = "_blank">
                      <img src = {pokemon.image} style={this.imgStyle} />
                    </a>
                    <span>
                      <strong>Type: </strong> {pokemon.pokeType.map((type, i) => {
                        return (
                          <span>
                            {i+1}. {type}&nbsp;
                          </span>
                        );
                      })}
                    </span>
                  </p>
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
