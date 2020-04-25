import React, { Component } from "react";
import ListCoursesComponentApp from "./ListCoursesComponentApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseComponent from "./CourseComponent";

class InstructorApp extends Component {
  render() {
    return (
      <Router>
        <>
          <h1>Instructor Application</h1>
          <Switch>
            <Route path="/" exact component={ListCoursesComponentApp} />
            <Route path="/courses" exact component={ListCoursesComponentApp} />
            <Route path="/courses/:id" component={CourseComponent} />
          </Switch>
        </>
      </Router>
    );
  }
}
export default InstructorApp;
