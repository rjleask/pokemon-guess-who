import React, { Component } from "react";
import API from "../../utils/API";
import Pokecard from "../../components/Pokecard";
import Scoreboard from "../../components/Scoreboard";
import DisplayToggle from "../../components/DisplayToggle";
import NewGameButton from "../../components/NewGameButton";
import "./Game.css";

class Game extends Component {

  state = {
    allPokemon: [],
    inputCheck: "",
    activeGame: false,
    correctPokemon: {},
    correctPokemonName: "",
    correctPokemonType: [],
    correctPokemonEvolution: {},
    correctValue: "",
    totalScore: 150,
    correctGuess: false,
    numTiles: 24,
    displayType: false,
    displayEvolveTo: false,
    displayEvolveFrom: false,
    showHintLink: false
  };

  specialCode = "ArrowUpArrowUpArrowUp";

  componentDidMount () {
    document.addEventListener("keydown", this.onKeyDown);
  };

  onKeyDown = (event) => {
    this.setState({
      inputCheck: this.state.inputCheck + event.key
    });
    console.log(this.state.inputCheck);
    this.easterEgg();
  };

  startNewGame = () => {
    this.gameStart();
  }
  gameStart = () => {
    API.startGame(this.state.numTiles)
      .then(res => {
        let i = Math.floor(Math.random() * res.data.length);
        this.setState({
          allPokemon: res.data
        });
        this.setState({
          correctPokemon: this.state.allPokemon[i],
          correctPokemonType: this.state.allPokemon[i].pokeType[0],
          correctPokemonName: this.state.allPokemon[i].title,
          correctPokemonEvolution: this.state.allPokemon[i].evolution,
          correctValue: i,
          activeGame: true
        })
        console.log(this.state.correctPokemon);
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
    this.setState({
      correctGuess: true
    });
    let range = end - this.state.totalScore;
    let increment = -1;
    let stepTime = Math.abs(Math.floor(1500 / range));
    let timer = setInterval(() => {
      this.setState({
        totalScore: this.state.totalScore + increment
      });
      if (this.state.totalScore === end) {
        clearInterval(timer);
        this.setState({
          correctGuess: false
        })
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
    this.setState({
      correctGuess: true,
      endGame: true
    })
    console.log("You are correct!");
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

  // initializeNewGame = () => {
  //   if(cookie exists and is database) {
  //     load user info from database, add to state
  //     set state logged in to true
  //     fill pokedex
  //   } else {
  //     loggedin = false
  //     fill pokedex
  //   }
  // }

  // updateUserOnWin = () => {
  //   if (logged in is true) {
  //     update user with pokemon and score
  //   }
  // }

  displayEvolveFrom = () => {
    this.setState({
      displayEvolveFrom: true
    });
    this.recievedHint();
  };

  easterEgg = () => {
    if(this.state.inputCheck.indexOf(this.specialCode) !== -1) {
      console.log("success");
      this.setState({
        inputCheck: "",
        showHintLink: true
      });
      document.removeEventListener("keydown", this.onKeyDown);
    }
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
            {(!this.state.activeGame) ? (
              <NewGameButton
                onClick = {this.startNewGame}
              />
            ) : (
              <div>
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
            )}
            {(this.state.showHintLink) ? (
              <div className = "text-center">
                <a href="/pokedex" target="_blank">
                  View Pokedex
                </a>
              </div>
            ) : (
              <div className = "text-center">
              </div>
            )}
            {(!this.state.endGame) ? (
              <div >
                Game is not over.
              </div>
            ) : (
              <div>
               Game is over.
              </div>
            )}
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
