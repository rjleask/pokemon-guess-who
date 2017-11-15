import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokedex from "./pages/Pokedex";

const App = () =>
	<Router>
    <div>
      <Route exact path="/" component={Pokedex} />
      <Route exact path="/pokedex" component={Pokedex} />
    </div>
  </Router>;

export default App;