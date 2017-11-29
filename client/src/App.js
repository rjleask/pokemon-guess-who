import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Profile from "./pages/Profile";
import Vault from "./pages/Vault";
import NotFound from "./pages/NotFound";

const App = () =>
	<Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/pokedex" component={Pokedex} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/vault" component={Vault} />
      <Route component = {NotFound} />
    </Switch>
  </Router>;

export default App;