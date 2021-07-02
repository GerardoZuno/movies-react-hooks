import React from 'react'
import './MovieCard.css'

export const MovieCard = ({movie}) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;           
    return <li className="movieCard">
            <img className="movieImage" src={imgUrl} alt={movie.title}/>
            <div>{movie.original_title}</div>     
          </li>
    }
