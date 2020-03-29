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
  getMovie = (name, likes, banner) => {
    return <Movie name={name} likes={likes} banner={banner} />;
  };
  render() {
    return (
      <div className="movies-section">
        {this.getMovie(
          this.state.Sarainodu.name,
          this.state.Sarainodu.likes,
          this.state.Sarainodu.banner
        )}
        {this.getMovie(
          this.state.Maharshi.name,
          this.state.Maharshi.likes,
          this.state.Maharshi.banner
        )}
        {this.getMovie(
          this.state.Avengers.name,
          this.state.Avengers.likes,
          this.state.Avengers.banner
        )}
      </div>
    );
  }
}

export default Movies;
