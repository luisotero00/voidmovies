import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import "../List/List.css";

function List() {


    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const endPoint =
            "https://api.themoviedb.org/3/discover/movie?api_key=37601adb0f216a365d57a2394409e8a3&language-en-US&page=1";
        axios.get(endPoint)
            .then((response) => {
                const apiData = response.data;
                setMoviesList(apiData.results);
            })
            .catch((error) => {
                swal(<h3>Error de red o servidor</h3>);
            });

    }, []);

    return (

        <div className="moviesRow">
            {moviesList.map((movie, index) => (
                <div className="item" key={index}>
                    <div className="card">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt="Imagen de la tarjeta"
                            className="card-img"
                        />
                        <div className="card-content">
                            <h3 className="card-title">{movie.title}</h3>
                            <p className="card-description">{movie.overview.substring(0, 100)}...</p>
                            <Link to={`/detail/${movie.id}`} className="card-link button">Enlace</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default List;
