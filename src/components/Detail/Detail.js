import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css";

function Detail() {
  const params = useParams();
  const movieId = params.id;

  const [movie, setMovieData] = useState({});

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=37601adb0f216a365d57a2394409e8a3&language=en-US`;

    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data;
        setMovieData(movieData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <div className="headerDetail">
      <h1 className="movieDetail">Movie Detail</h1>
      <div className="movieCard">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie poster"
          className="card-img-top"
        />
        <div className="card-body">
          <h2 className="card-title">{movie.title}</h2>
          <p className="card-text">{movie.overview}</p>
          <p className="card-text">
            Release date: {movie.release_date} | Rating: {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;

