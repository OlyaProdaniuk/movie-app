import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../api/index";

import MovieRow from "../MovieRow/index";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const SingleMovie = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3${movie_id}?${API_KEY}&language=en-US`;
    getMovie(movieUrl);
  }, [movie_id]);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <div className="movie-card-items">
            <MovieRow movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>
          </div>

          <div className="info">
            <h3>
              <AutoAwesomeIcon />
              Budget:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>

          <div className="info">
            <h3>
              <AutoAwesomeIcon />
              Revenue:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>

          <div className="info">
            <h3>
              <AutoAwesomeIcon />
              Runtime:
            </h3>
            <p>{movie.runtime} Minutes</p>
          </div>

          <div className="info description">
            <h3>
              <AutoAwesomeIcon />
              Synopsis:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleMovie;
