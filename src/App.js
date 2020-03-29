import React, { Component } from "react";
import "./App.css";

import InstructorApp from "./components/InstructorApp";
import ListCoursesComponentApp from "./components/ListCoursesComponentApp";
import Movie from "./movie/Movie";
import Movies from "./Movies/Movies";
import Calculator from "./Calculator/Calculator";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";

function App() {
  return (
    <div className="containter">
      {/*<Calculator />*/}
      <Movies />

      {/*<LifeCycleDemo a={10}/> */}
    </div>
  );
}

export default App;
