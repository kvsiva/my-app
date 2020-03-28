import React from "react";
import Movie from "../movie/Movie";
import "./styles.css";
class Movies extends React.Component {
  render() {
    return (
      <div className="movies-section">
        <Movie
          likes="123.0k"
          name="Sarainodu"
          banner="https://www.filmibeat.com/fanimg/214x100x267/fan_images/sarrainodu-photos-images-41556.jpg"
          hero="Alluarjun"
        />
        <Movie
          likes="123.0k"
          name="Maharshi"
          banner="https://m.media-amazon.com/images/M/MV5BNzQ3YzkyMjEtNGFmYi00Y2QzLTg4NjItODMzNWQ0NzBiYWEzXkEyXkFqcGdeQXVyNjQ1MDcxNzM@._V1_.jpg"
          hero=""
        />
        <Movie
          likes="1m"
          name="Avengers"
          banner="https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg"
          hero=""
        />
      </div>
    );
  }
}

export default Movies;
