import React, {useEffect, useState} from 'react'
import { get } from "../utils/httpClient";
import { MovieCard } from './MovieCard'
import './MoviesGrid.css'

export const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
    return (
            <ul className="movieGrid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}   
           </ul>
    )
}
