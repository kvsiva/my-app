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
    console.log(this.state);
    return (
      <div className="movies-section">
        {Object.keys(this.state).map(x => {
          console.log(this.state[x]);
        })}
        {this.getMovie(this.state.sarainodu)}
        {this.getMovie(this.state.maharshi)}
        {this.getMovie(this.state.avengers)}
      </div>
    );
  }
}

export default Movies;
