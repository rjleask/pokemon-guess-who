import React, { Component } from "react";
import API from "../../utils/API";
import MyModal from "../../components/Modals"
import {Link} from "react-router-dom";
import Logout from "../../components/logoutBtn";
import "./Home.css";

class Home extends Component {
  state = {
    cookie: false,
    username: ""
  }
  componentDidMount(){
    this.cookieCheck();
  }

  cookieCheck(){
    if(document.cookie.length > 90) {
      this.setState({cookie:true});
      this.getUserInfo();
    }
    else{
      this.setState({cookie:false});
    }
  }

  getUserInfo = () => {
    API.getUserInfo()
    .then(res => {
      this.setState({
        username: res.data.username
      });
    })
    .catch(err => console.log(err));
  }

  render(){
    if(this.state.cookie === false){
    return (
      <div>
          <div className="page-wrapper">
            <div className="content-wrapper">
              <MyModal />
            </div>
          </div>
      </div>
    )
    }else{
      return (
        <div>
          <div className="page-wrapper">
            <div className="content-wrapper">
              <p className="welcome-back">Welcome Back!</p>
              <p className="user-play-btn"><Link to="/game"><button className="btn button-primary play-btn">Play</button></Link></p>
              <p className="user-profile-btn"><Link to="/profile"><button className="btn button-primary play-btn">Profile</button></Link></p>
              <Logout />
            </div>
          </div>
        </div>
      )
    }
  }
}
export default Home;