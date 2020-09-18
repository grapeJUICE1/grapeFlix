import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../css/Banner.css";
import requests from "../requests";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + " ...";
    } else {
      return str;
    }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
