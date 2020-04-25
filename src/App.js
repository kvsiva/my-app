import React, { Component } from "react";
import "./App.css";

import InstructorApp from "./components/InstructorApp";
import ListCoursesComponentApp from "./components/ListCoursesComponentApp";
import Movie from "./movie/Movie";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { CustomeRouter } from "./CustomeRouter";
import FCDemo from "./components/FCDemo";
import CCDemo from "./components/CCDemo";

function App() {
  return (
    <Router>
      <CustomeRouter />
      <InstructorApp />
      <FCDemo />
      <CCDemo />
    </Router>
  );
}

export default App;
