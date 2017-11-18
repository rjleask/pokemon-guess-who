import React, { Component } from "react";
import API from "../../utils/API";
import Pokecard from "../../components/Pokecard";
import Scoreboard from "../../components/Scoreboard"

class Game extends Component {

  state = {
    allPokemon: [],
    correctPokemon: [],
    correctValue: "",
    totalScore: 150,
    correctGuess: false,
    numTiles: 24
  };


  componentDidMount () {
    this.gameStart()
  };

  gameStart = () => {
    API.startGame(this.state.numTiles)
      .then(res => {
        let i = Math.floor(Math.random() * res.data.length);
        this.setState({
          allPokemon: res.data,
          correctPokemon: res.data[i],
          correctValue: i
        });
        console.log(this.state.correctPokemon.title);
      })
      .catch(err => console.log(err));
  };

  handleClick = (data) => {
    if(data === this.state.correctValue) {
      this.correctGuess();
    } else {
      this.incorrectGuess();
    }
  };

  incorrectGuess = () => {
    if(this.state.totalScore - 10 >= 0 && !this.state.correctGuess) {
      this.setState({
        totalScore: this.state.totalScore - 10
      });
      console.log("You answered incorrectly. Take 10");
    } else {
      console.log("too low");
    }
  };

  correctGuess = () => {
    console.log(`You have won! You earned ${this.state.totalScore}`);
    this.setState({
      correctGuess: true
    })
  }

  divStyles = {
    background: "#eee",
    padding: "10px",
    border: "1px solid black",
    margin: "5px",
  };

  render () {
    return (
      <div className = "container">
        <div className = "row">
          <div className = "col-sm-12 col-md-3">
            <Scoreboard
              score = {this.state.totalScore}
            />
          </div>
          <div className = "col-sm-12 col-md-9">
          {this.state.allPokemon.map((pokemon, i) => {
            return(
                <Pokecard
                key = {i}
                title = {pokemon.title}
                image = {pokemon.image}
                onClick = {() => this.handleClick(i)}
                style = {this.divStyles}
                disabled = {this.state.correctGuess}
                />
            );
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
