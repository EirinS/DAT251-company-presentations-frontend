import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Pages/Login'
import Dashboard from "./Pages/Dashboard";
import ContactUs from "./Pages/ContactUs";
import Signup from "./Pages/Signup";

export default function Routing() {
  return (
    <Router>
      <div>
        {}
        <Switch>
          <Route path="/Login" exact component={Login}/>
          <Route path="/Dashboard" exact component={Dashboard}/>
          <Route path="/Contact" exact component={ContactUs}/>
          <Route path="/Signup" exact component={Signup}/>

        </Switch>
      </div>
    </Router>
  );
}
