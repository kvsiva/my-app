import React from "react";
import Movie from "../movie/Movie";
import "./styles.css";
class Movies extends React.Component {
  getMovie = (name, likes, banner) => {
    return <Movie name={name} likes={likes} banner={banner} />;
  };
  render() {
    return (
      <div className="movies-section">
        {this.getMovie(
          "Sarainodu",
          "123.0k",
          "https://www.filmibeat.com/fanimg/214x100x267/fan_images/sarrainodu-photos-images-41556.jpg"
        )}
        {this.getMovie(
          "Maharshi",
          "123.0k",
          "https://m.media-amazon.com/images/M/MV5BNzQ3YzkyMjEtNGFmYi00Y2QzLTg4NjItODMzNWQ0NzBiYWEzXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg"
        )}
        {this.getMovie(
          "Avengers",
          "1m",
          "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
        )}
      </div>
    );
  }
}

export default Movies;
