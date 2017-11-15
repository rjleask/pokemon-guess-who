import React from "react";
import API from "../utils/API";
// import {Link} from "react-router-dom";


class Login extends React.Component{
  handlerClick = () => {
    // API.authLogin().then(console.log("LOGIN PAGE"));
    // browserHistory.push("/login");
    // window.location.href = "http://localhost:3000/api/auth/google";
  };
  render(){
    return (
      // <button className="login-btn" onClick={this.handlerClick}>Login</button>

      <a href="http://localhost:3001/api/auth/google">Login</a>
      // <Link to="/api/auth/login">Login</Link> 
    );
  
  }
}
export default Login;