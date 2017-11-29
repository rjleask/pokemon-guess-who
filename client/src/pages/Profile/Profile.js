import React, { Component } from "react";
import API from "../../utils/API";
import {Link} from "react-router-dom";
import "./Profile.css";

class Profile extends Component {
  state = {
    username:"",
    highScore:0,
    highScoreList:[],
    scoreStatus: true
  }
  componentDidMount(){
    this.getUserInfo();
  }
  getUserInfo = () => {
    API.getUser()
    .then(res => {
      this.setState({
        username: res.data[0].username,
        highScore:res.data[0].highScore,
        highScoreList:res.data
      });
      console.log(res.data);
    })
    .catch(err => console.log(err));
  }
  handleClick = () => {
     this.setState({
       scoreStatus:!this.state.scoreStatus
     })
  }

  render(){
    let highscoreVisibility = this.state.scoreStatus ? "hidden" : "initial";
    return (
      <div>
          <div className="profile-page-wrapper">
            <div className="full-content-page">
              <div className="profile-content-wrapper">
                  <h1 className='profile-title'>Profile</h1>
                  <h1 className="user-stats">User Name: {this.state.username}</h1>
                  <h1 className="user-stats">High Score: {this.state.highScore}</h1>
                  <div className="navbar-bottom">
                    <span className="nav-item home"><Link to="/home">Home</Link></span>
                    <span className="nav-item play"><Link to="/game">Play</Link></span>
                    <span className="nav-item vault"><Link to="/vault" target="_blank">Poke Vault</Link></span>
                    <span className="nav-item highscore" onClick={this.handleClick.bind(this)}><a href="#hlist">High Score List</a></span>
                  </div>
              </div>
              <div className="chains">
              </div>
              <div  style={{visibility:highscoreVisibility}} className="highscore-list">
              <a name="hlist">
                <h2 className="highscore-title">High Score Ranking</h2>
              </a>
                {this.state.highScoreList.map((users, i) => {
                  console.log(users.username);
                  return (
                    <div className="highscore-itembox" key={i}>
                      <span className="highscore-items">{users.username}</span>
                      <span className="highscore-items score">{users.highScore}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Profile;