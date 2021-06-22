import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";

const baseurl = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setmovies(request.data.results);
      // console.log(request.data.results)
      // return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  console.table(movies);
  return (
    <div className="row">
      <h2 style={{ color: "white" }}>{props.title}</h2>

      <div className="row-posters">
        {}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
            src={`${baseurl}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
