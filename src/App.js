import React, { Component } from "react";
import "./App.css";

import InstructorApp from "./components/InstructorApp";
import ListCoursesComponentApp from "./components/ListCoursesComponentApp";
import Movie from "./movie/Movie";
import Movies from "./Movies/Movies";
import Calculator from "./Calculator/Calculator";

function App() {
  return (
    <div className="containter">
      <Calculator />
      {/*
      <Movies />
      */}
    </div>
  );
}

export default App;
