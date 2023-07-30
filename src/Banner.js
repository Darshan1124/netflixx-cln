import React, { useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
// function truncate(str, n) {
//   return str.length > n ? str.substr(0, n - 1) + "..." : str;
// }

export default function Banner() {
  const [movie, setMovie] = useState([]);

  // useEffect(()=>{
  async function fetchData() {
    const request = await axios.get(requests.fetchTrending);
    setMovie(
      request.data.results[0]
      // Math.floor(Math.random() * request.data.results.length-1)
    );
    return request;
  }
  fetchData();
  // })
  // console.log(movie);

  

  return (
    <header
      className="banner00"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* {console.log(movie.overview)} */}
        <h1 className="banner_description">
        {movie.overview}
        {/* {truncate(movie.overview,150)} */}
        </h1>
      </div>
      <div className="banner-fadebottom" />
    </header>
  );
}


