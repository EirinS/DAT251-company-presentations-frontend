import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Registration from "./Pages/Registration";

export default function Routing() {
  return (
    <Router>
      <div>
        {}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/Dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}
