import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Feedback from "./components/Feedback/Feedback";
import Home from "./components/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Link className="brand" to="/">
            Elci Teknoloji Task
          </Link>

          <Link className="home-issue-btn " to="/feedback">
            New Issue
          </Link>
        </div>
        <Switch>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
