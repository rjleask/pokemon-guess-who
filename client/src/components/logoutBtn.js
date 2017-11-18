import React from "react";
import API from "../utils/API";


class Logout extends React.Component{
  render(){
    return (
      <p><a href="http://localhost:3001/api/auth/logout"><button className="btn btn-primary">Logout</button></a></p>
    );
  
  }
}
export default Logout;