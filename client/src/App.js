import React, { Component } from 'react';
import './App.css';
import Left_side_bar from './components/left_side_bar';
import Pokemon_card_item from './components/pokemon_card_item';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon Guess Who</h1>
        </header>
        <div className="App-container">  
          <div className="App-side-bar">
            <Left_side_bar />
          </div>
          <div className="App-pokemon-container">
            <Pokemon_card_item numCards={25} />
          </div>
        </div>                
      </div>
    );
  }
}

export default App;
