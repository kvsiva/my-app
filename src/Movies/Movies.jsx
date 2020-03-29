import React from "react";
import Movie from "../movie/Movie";
import "./styles.css";
class Movies extends React.Component {
  state = {
    Sarainodu: {
      name: "Sarainodu",
      likes: 0,
      banner:
        "https://www.filmibeat.com/fanimg/214x100x267/fan_images/sarrainodu-photos-images-41556.jpg"
    },
    Maharshi: {
      name: "Maharshi",
      likes: 0,
      banner:
        "https://m.media-amazon.com/images/M/MV5BNzQ3YzkyMjEtNGFmYi00Y2QzLTg4NjItODMzNWQ0NzBiYWEzXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg"
    },
    Avengers: {
      name: "Avengers",
      likes: 0,
      banner:
        "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
    }
  };
  getMovie = movie => {
    return (
      <Movie name={movie.name} likes={movie.likes} banner={movie.banner} />
    );
  };
  render() {
    return (
      <div className="movies-section">
        {this.getMovie(this.state.Sarainodu)}
        {this.getMovie(this.state.Maharshi)}
        {this.getMovie(this.state.Avengers)}
      </div>
    );
  }
}

export default Movies;
