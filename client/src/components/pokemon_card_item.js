import React, {Component} from 'react';

class Pokemon_card_item extends Component{
	render(){
    // add 25 cards to an array then return them inside the pokemon-wrapper
    var pokemonCardArr = [];
    for(var i=0; i<this.props.numCards;i++){
      pokemonCardArr.push(
      <div className="pokebox green" key={i} onMouseEnter={this.handlerMouseEnter}>
        <button className="choose-btn poke-btn" style={{display:"none"}}>Choose</button>
        <button className="remove-btn poke-btn" style={{display:"none"}}>Remove</button>
      </div>)
    }
		return (
			<div className="pokemon-wrapper">
          {pokemonCardArr}
			</div>
      );
  }
  handlerMouseEnter(){
    console.log('okay');
  }
}

export default Pokemon_card_item;