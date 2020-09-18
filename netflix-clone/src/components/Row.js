import React, { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../css/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => {
          const handleClick = (movie) => {
            if (trailerURL) {
              setTrailerURL("");
            } else {
              movieTrailer(movie?.name || "")
                .then((url) => {
                  const urlParams = new URLSearchParams(new URL(url).search);
                  setTrailerURL(urlParams.get("v"));
                })
                .catch((err) => console.log(err));
            }
          };

          return (
            <img
              key={movies.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>

      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
