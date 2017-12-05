import React from "react";
let heroku = true;
let url;
if(heroku){
  url = 'https://calm-hamlet-36261.herokuapp.com/api/auth/google';

}else{
  url = 'http://localhost:3001/api/auth/google';
}
class Login extends React.Component{
  render(){
    return (
      <a href={url}><button className="btn btn-primary">Login</button></a>
    );

  }
}
export default Login;