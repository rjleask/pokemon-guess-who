import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import "./Pokedex.css";
import API from "../../utils/API";

class Pokedex extends Component {
  
  state = {
    pokemon: [],
    inputCheck: ""
  };

  specialCode = "ArrowUpArrowUpArrowUp";
  
  componentDidMount () {
    this.fillPokedex();
    document.addEventListener("keydown", this.onKeyDown);
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

  onKeyDown = (event) => {
    this.setState({
      inputCheck: this.state.inputCheck + event.key
    });
    console.log(this.state.inputCheck);
    this.easterEgg();
  }

  easterEgg = () => {
    if(this.state.inputCheck.indexOf(this.specialCode) !== -1) {
      console.log("success");
      this.setState({
        inputCheck: ""
      });
    }
  }

  imgStyle = {
    height: "100px"
  };

  render () {
    return (
      <div className = "container container-pokedex">
        <div className="panel-heading">
					<h3 className="panel-title panel-title-pokedex">Pokedex<img className="Pokeball" src="https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807" alt="Pokeball"></img></h3>
				</div>
        <div className = "panel-body panel-body-pokedex">
          <List>
            {this.state.pokemon.map((pokemon, i) => {
              return (
                <ListItem  key = {i}>
                  <div>
                    <p className = "text-center text-center-pokedex">
                      {pokemon.title}
                    </p>
                    <a href = {pokemon.link} target = "_blank">
                      <img src = {pokemon.image} style={this.imgStyle} alt = {this.title}/>
                    </a>
                    <span>
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
    );
  }
}

export default Pokedex;
