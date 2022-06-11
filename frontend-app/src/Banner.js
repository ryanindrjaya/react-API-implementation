import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";
import parse from 'html-react-parser';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.movieList);
      setMovie(
        request.data[
          Math.floor(Math.random() * request.data.length)
        ]
      )
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, maxWord) {
    return string?.length > maxWord
      ? string.substr(0, maxWord - 1) + "..."
      : string;
  }

  const bannerImg = () => {
    if (movie) {
      if (movie.show.image === null){
        return 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
      }
      return movie?.show.image.original;
    }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${bannerImg()})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.show.name}
        </h1>
        <h1 className="banner__description">
          {parse(`${truncate(movie?.show.summary, 300)}`)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
