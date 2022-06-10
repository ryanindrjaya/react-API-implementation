import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";
import parse from 'html-react-parser';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.girlList);
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
        return 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/paper-girls-featured.jpg';
      }
      return movie?.show.image.original;
    } else {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png';
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
