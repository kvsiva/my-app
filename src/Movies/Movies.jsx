import React from "react";
import Movie from "../movie/Movie";
import "./styles.css";
import movies1 from "./movies1";
class Movies extends React.Component {
  state = { ...movies1 };
  getMovie = movie => {
    return (
      <Movie name={movie.name} likes={movie.likes} banner={movie.banner} />
    );
  };
  render() {
    console.log(this.state);
    return (
      <div className="movies-section">
        {Object.keys(this.state).map(x => {
          return this.getMovie(this.state[x]);
        })}
      </div>
    );
  }
}

export default Movies;
