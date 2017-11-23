import React, { Component } from "react";
import API from "../../utils/API";
import Pokecard from "../../components/Pokecard";
import Scoreboard from "../../components/Scoreboard";
import DisplayToggle from "../../components/DisplayToggle";
import NewGameButton from "../../components/NewGameButton";
import WinPokeCard from "../../components/WinPokeCard";
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
    showHintLink: false,
    user: "",
    cookie: false
  };

  specialCode = "ArrowUpArrowUpArrowUp";

  componentDidMount () {
    document.addEventListener("keydown", this.onKeyDown);
    this.getPokemon();
    this.getUserInfo();
  };

  onKeyDown = (event) => {
    this.setState({
      inputCheck: this.state.inputCheck + event.key
    });
    console.log(this.state.inputCheck);
    this.easterEgg();
  };

  getPokemon = () => {
    API.startGame(this.state.numTiles)
    .then(res => {
      let i = Math.floor(Math.random() * res.data.length);
      this.setState({
        allPokemon: res.data,
        correctPokemon: res.data[i],
        correctPokemonType: res.data[i].pokeType[0],
        correctPokemonName: res.data[i].title,
        correctPokemonEvolution: res.data[i].evolution,
        correctValue: i,
      })
      console.log(this.state.correctPokemon);
    })
    .catch(err => console.log(err));
  }

  startNewGame = () => {
    this.getPokemon();
    this.setState({
      endGame: false,
      correctGuess: false
    })
  };

  getUserInfo = () => {
    if(this.state.cookie) {
      API.getUserInfo(this.getCookie("user"))
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
    }
  };

  updateUser = () => {
      API.updateGameWin({
        _id: this.state.user._id,
        highScore: parseInt(this.state.user.highScore) + parseInt(this.state.totalScore),
        pokemon: this.state.correctPokemon
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  cookieCheck(){
    if(document.cookie.length > 90) {
      this.setState({cookie:true});
    }
    else{
      this.setState({cookie:false});
    }
  };

  getCookie = (cookiename) => {
    var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
  };

  gameStart = () => {
    this.setToActive();
  };

  setToActive = () => {
    this.setState({
      activeGame: true
    });
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
    if(this.state.cookie) {
      this.updateUser();
    }
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

  renderPokeCards = () => {
    if(this.state.activeGame) {
      return this.state.allPokemon.map((pokemon, i) => <Pokecard
        key = {i}
        title = {pokemon.title}
        cardStyle = {pokemon.pokeType[0]}
        image = {pokemon.image}
        onClick = {() => this.handleClick(i)}
        style = {this.divStyles}
        onMouseEnter = {() => this.handleMouseEnter(pokemon.pokeType[0])}
        disabled = {this.state.correctGuess}
        />);
    }
  };
  handleMouseEnter = (type) => {
    console.log(type);
  }

  divStyles = {
    background: "black",
    padding: "2px",
    border: "1px solid black",
  };
  
  render () {
    return (
      <div>
      <div className="game-wrapper">
        <div className = "sidepanel">
          <div className = "sidepanel-oval">
            {(!this.state.activeGame) ? (
              <NewGameButton
                onClick = {this.gameStart}
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
              <div>
                <br />
                Game is not over.
              </div>
            ) : (
              <div>
                <br />
                <WinPokeCard
                  onClick = {this.startNewGame}
                  title = {this.state.correctPokemonName}
                  image = {this.state.correctPokemon.image}
                />
              </div>
            )}
          </div>
        </div>
        <div className = "container maingame">
          <div className = "roww">
            <div className = "pokecardss">
              {this.renderPokeCards()}
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Game;
