import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";

export default function Routing() {
  return (
    <Router>
      <div>
        {}
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
