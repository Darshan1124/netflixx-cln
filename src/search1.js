import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Search from "./search";
import './search1.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Search1({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // code in this useeffect function will only lode after row loaded
    // if [],run once when the row loads, and not run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'red' }}>{title}....</h2>
      {/* <div className="container">
            <div className="child"> */}
      {/* <div className="rowp"> */}
      {movies.map((movie) => (
        <div className="row">
          <div className="image-container">
            {/* <img src="your-image-url" alt="Image" /> */}
            <img
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.title}
          />           
          </div>
          <div className="text-container">
            <p style={{ color: 'white', fontSize: "0.8rem" }}><strong>Title:</strong> {movie.title}<br /></p>
            <p style={{ color: 'white' }}><strong>overview:</strong> {movie.overview}</p>
            <p style={{ color: 'white' }}><strong>Release Date:</strong> {movie.release_date}</p>
            <p style={{ color: 'white' }}><strong>Average Voting:</strong> {movie.vote_average}</p>
            <p style={{ color: 'white' }}><strong>Total Votes:</strong> {movie.vote_count}</p>
          </div>
        </div>
        // <div id="parent">
        //   <img
        //     key={movie.id}
        //     // style={{float:'left'}}
        //     // onClick={()=>handleClick(movie)}
        //     className={`rowp ${isLargeRow && "row_posterLarge"} `}
        //     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
        //       }`}
        //     alt={movie.title}
        //   />
        //   <div
        //     style={{ paddingTop: '15px' }}
        //   >
        //     <p style={{ color: 'white',fontSize:"0.8rem" }}><strong>Title:</strong> {movie.title}<br /></p>
        //     <p style={{ color: 'white' }}><strong>overview:</strong> {movie.overview}</p>
        //     <p style={{ color: 'white' }}><strong>Release Date:</strong> {movie.release_date}</p>
        //     <p style={{ color: 'white' }}><strong>Average Voting:</strong> {movie.vote_average}</p>
        //     <p style={{ color: 'white' }}><strong>Total Votes:</strong> {movie.vote_count}</p>


        //   </div>

        // </div>
      ))}
      {/* </div> */}
      {/* </div>
          </div> */}
      {/* </div> */}
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
      {/* <YouTube videoId="48H-Pa4o46g" opts={opts} /> */}
    </div>
  );
}

export default Search1;
