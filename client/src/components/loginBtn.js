import React from "react";
import API from "../utils/API";


class Login extends React.Component{
  handlerClick = () => {
    API.authLogin().then(console.log("LOGIN PAGE"));
  };
  render(){
    return (
      <button className="login-btn" onClick={this.handlerClick}>Login</button>
    );
  
  }
}
export default Login;