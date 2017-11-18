import React, { Component } from "react";
import API from "../../utils/API";
import MyModal from "../../components/Modals"
import {Link} from "react-router-dom";
import Logout from "../../components/logoutBtn";
import "./Home.css";

class Home extends Component {
  state = {
    cookie:false,
    username: ""
  }
  componentDidMount(){
    this.cookieCheck();
    this.getUserInfo();
  }
  cookieCheck(){
    if(document.cookie.length > 90) {
      this.setState({cookie:true});
    }
    else{
      this.setState({cookie:false});
    }
  }
  getUserInfo = () => {
    API.getUser()
    .then(res => {
      this.setState({
        username: res.data[0].username
      });
      this.sendCookie();
    })
    .catch(err => console.log(err));
  }
  sendCookie = () => {
    API.saveCookie({
      username: this.state.username,
      userCookie: this.getCookie("user")
    })
    .then(res => console.log(res.data));
  }
  getCookie = (cookiename) => {
    var cookiestring=RegExp(""+cookiename+"[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
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
              <Logout /> 
            </div>
          </div>
        </div>
      )
    } 
  }
}
export default Home;