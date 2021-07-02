import React from 'react'
import { MovieCard } from './MovieCard'
import movies from './movies.json'
import './MoviesGrid.css'

export const MoviesGrid = () => {
    return (
            <ul className="movieGrid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}   
           </ul>
    )
}
