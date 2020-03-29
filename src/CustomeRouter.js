import React from "react";
import Movies from "./Movies/Movies";
import Calculator from "./Calculator/Calculator";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";
import { Route, Link } from "react-router-dom";
export function CustomeRouter() {
  return (
    <div>
      <Link to="/calc">Calculator</Link> <br />
      <Link to="/movies">Movies</Link> <br />
      <Link to="/lifecycledemo">Life Cycle Demo</Link>
      <hr />
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/lifecycledemo">
        <LifeCycleDemo />
      </Route>
      <Route path="/calc">
        <Calculator />
      </Route>
    </div>
  );
}
