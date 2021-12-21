import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import HomePage from "./views/Home page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>

        </Route>
        <Route path="/about" exact>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;