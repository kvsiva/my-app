import React from "react";
import Movie from "../movie/Movie";
import "./styles.css";
import movies from "./movies";
class Movies extends React.Component {
  state = { ...movies };
  getMovie = movie => {
    return (
      <Movie name={movie.name} likes={movie.likes} banner={movie.banner} />
    );
  };
  render() {
    return (
      <div className="movies-section">
        {this.getMovie(this.state.sarainodu)}
        {this.getMovie(this.state.maharshi)}
        {this.getMovie(this.state.avengers)}
      </div>
    );
  }
}

export default Movies;
