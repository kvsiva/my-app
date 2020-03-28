import React, { Component } from "react";
import "./App.css";

import InstructorApp from "./components/InstructorApp";
import ListCoursesComponentApp from "./components/ListCoursesComponentApp";
import Movie from "./movie/Movie";
import Movies from "./Movies/Movies";

function App() {
  return (
    <div className="containter">
      <Movies />
    </div>
  );
}

export default App;
