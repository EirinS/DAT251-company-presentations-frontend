import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Pages/Login'
import Dashboard from "./Pages/Dashboard";

export default function Routing() {
  return (
    <Router>
      <div>
        {}
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
