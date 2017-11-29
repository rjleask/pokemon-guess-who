import React from "react";
<<<<<<< HEAD

=======
import API from "../utils/API";
let heroku = true;
let url;
if(heroku){
  url = 'https://calm-hamlet-36261.herokuapp.com/api/auth/logout';
  
}else{
  url = 'http://localhost:3001/api/auth/logout';
}
>>>>>>> master
class Logout extends React.Component{
  render(){
    return (
      <p><a href={url}><button className="btn btn-primary">Logout</button></a></p>
    );

  }
}
export default Logout;