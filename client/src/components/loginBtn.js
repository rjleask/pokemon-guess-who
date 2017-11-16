import React from "react";
import API from "../utils/API";


class Login extends React.Component{
  render(){
    return (
      // <button className="login-btn" onClick={this.handlerClick}>Login</button>
      <a href="http://localhost:3001/api/auth/google">Login</a>
    );
  
  }
}
export default Login;