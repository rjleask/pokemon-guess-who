import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () =>
	<Router>
    <div>
      <Route exact path="/" component={Pokedex} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />      
      <Route exact path="/pokedex" component={Pokedex} />
    </div>
  </Router>;

export default App;