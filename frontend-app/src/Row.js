import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(fetchUrl)
          .then((res) => {
            setMovies(res.data);
          });
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          if (movie.show.image !== null) {
            return (
              <div key={`${movie.show.id}`} className="row__element">
                {loading ? (
                  <img
                    className="row__poster"
                    src={`${movie.show.image.original}`}
                    alt={`${movie.show.name}`}
                  />
                ) : (
                  <div className="loader">Loading...</div>
                )}
              </div>
            );
          } else {
            return (
              <div key={`${movie.show.id}`} className="row__element">
                {loading ? (
                  <img
                    className="row__poster"
                    src="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg"
                    alt=""
                  />
                ) : (
                  <div className="loader">Loading...</div>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Row;
