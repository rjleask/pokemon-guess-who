import React, { Component } from "react";
import API from "../../utils/API";
import {Link} from "react-router-dom";

class Profile extends Component {
  state = {
    username:[]
  }
  componentDidMount(){
    this.getUserInfo();
  }
  getUserInfo = () => {
    API.getUser()
    .then(res => {
      console.log(res);
      this.setState({
        username: res.data[0].username
      });
    })
    .catch(err => console.log(err));
  }
  
  
  render(){
    return (
      <div>
          <div className="page-wrapper">
            <div className="content-wrapper">
               <h1>UserName:{this.state.username}</h1>
            </div>
          </div>
      </div>
    )
  }
}
export default Profile;