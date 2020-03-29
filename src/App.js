import React, { Component } from "react";
import "./App.css";

import InstructorApp from "./components/InstructorApp";
import ListCoursesComponentApp from "./components/ListCoursesComponentApp";
import Movie from "./movie/Movie";
import Movies from "./Movies/Movies";
import Calculator from "./Calculator/Calculator";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Calculator</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/lifecycledemo">Life Cycle Demo</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/lifecycledemo">
            <LifeCycleDemo />
          </Route>
          <Route path="/">
            <Calculator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
