import * as React from "react";
import "./style.css";
function Movie(props) {
  return (
    <div className="movie-card">
      <img src={props.banner} />
      <label>
        {" "}
        {props.likes} {props.name} {props.hero}
      </label>
    </div>
  );
}
export default Movie;
