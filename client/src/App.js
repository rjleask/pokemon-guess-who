import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import NotFound from "./pages/NotFound";

const App = () =>
	<Router>
    <div>
      <div>
	      <div>
	        <Route exact path="/" component={Pokedex} />
	        <Route exact path="/pokedex" component={Pokedex} />
	        <Route component={NotFound} />
	      </div>
      </div>
    </div>
  </Router>;

export default App;