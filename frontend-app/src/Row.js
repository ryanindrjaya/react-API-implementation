import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  if (movies) {
    return (
      <div className="row">
        <h2>{title}</h2>

        <div className="row__posters">
          {movies.map((movie) => {
            if (movie.show.image !== null) {
              return (
                <img
                  className="row__poster"
                  key={movie.show.id}
                  src={`${movie.show.image.original}`}
                  alt={`${movie.show.name}`}
                />
              );
            } else {
              return (
                <img
                  className="row__poster"
                  src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/05/paper-girls-featured.jpg"
                  alt=""
                />
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading content...</div>;
  }
}

export default Row;
