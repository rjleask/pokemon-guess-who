import React, { Component } from "react";
import API from "../../utils/API";
import Pokecard from "../../components/Pokecard";
import Scoreboard from "../../components/Scoreboard";
import DisplayToggle from "../../components/DisplayToggle";
import "./Game.css";

class Game extends Component {

  state = {
    allPokemon: [],
    correctPokemonName: "",
    correctPokemonType: [],
    correctPokemonEvolution: {},
    correctValue: "",
    totalScore: 150,
    correctGuess: false,
    numTiles: 24,
    displayType: false,
    displayEvolveTo: false,
    displayEvolveFrom: false
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
          correctPokemonName: res.data[i].title,
          correctPokemonType: res.data[i].pokeType[0],
          correctPokemonEvolution: res.data[i].evolution,
          correctValue: i
        });
        console.log(this.state.correctPokemonName);
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

  animateScoreChange = (end) => {
    let range = end - this.state.totalScore;
    let increment = -1;
    let stepTime = Math.abs(Math.floor(1500 / range));
    let timer = setInterval(() => {
      this.setState({
        totalScore: this.state.totalScore + increment
      });
      if (this.state.totalScore === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  incorrectGuess = () => {
    if(this.state.totalScore - 10 >= 0 && !this.state.correctGuess) {
      this.animateScoreChange(this.state.totalScore - 10);
    } else if (this.state.totalScore !== 0) {
      this.animateScoreChange(0);
    }
  };

  recievedHint = () => {
    if(this.state.totalScore - 15 >= 0 && !this.state.correctGuess) {
      this.animateScoreChange(this.state.totalScore - 15);
    } else if (this.state.totalScore !== 0) {
      this.animateScoreChange(0);
    }
  };

  correctGuess = () => {
    console.log(`You have won! You earned ${this.state.totalScore}`);
    this.setState({
      correctGuess: true
    })
  };

  displayType = () => {
    this.setState({
      displayType: true
    });
    this.recievedHint();
  };

  displayEvolveTo = () => {
    this.setState({
      displayEvolveTo: true
    });
    this.recievedHint();
  };

  displayEvolveFrom = () => {
    this.setState({
      displayEvolveFrom: true
    });
    this.recievedHint();
  };

  divStyles = {
    background: "#eee",
    padding: "2px",
    border: "1px solid black",
    margin: "10px 10px 0px 0px"
  };

  render () {
    return (
      <div className = "container maingame">
        <div className = "row">
          <div className = "col-sm-12 col-md-3 sidepanel">
            <Scoreboard
              score = {this.state.totalScore}
            />
            <DisplayToggle
              showText = {this.state.displayType}
              toggleDisplay = {this.displayType}
              displayQuestion = {"Show the Type."}
              displayAnswer = {this.state.correctPokemonType}
              disabled = {this.state.correctGuess}
            />
            <DisplayToggle
              showText = {this.state.displayEvolveTo}
              toggleDisplay = {this.displayEvolveTo}
              displayQuestion = {"Does this pokemon evolve?"}
              displayAnswer = {this.state.correctPokemonEvolution.to !== "false"  && this.state.correctPokemonEvolution ? (
                "This pokemon evolves!"
              ) : (
                "This pokemon does not evolve!"
              )}
              disabled = {this.state.correctGuess}
            />
             <DisplayToggle
              showText = {this.state.displayEvolveFrom}
              toggleDisplay = {this.displayEvolveFrom}
              displayQuestion = {"Did this pokemon evolve?"}
              displayAnswer = {this.state.correctPokemonEvolution.from !== "false" && this.state.correctPokemonEvolution ? (
                "This pokemon did evolve!"
              ) : (
                "This pokemon did not evolve!"
              )}
              disabled = {this.state.correctGuess}
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
