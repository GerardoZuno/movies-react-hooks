import React from 'react'
import './MovieCard.css'
import {Link} from 'react-router-dom'

export const MovieCard = ({movie}) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;           
    return <li className="movieCard">
            <Link to={"/movies/" + movie.id}>
            <img className="movieImage" src={imgUrl} alt={movie.title}/>
            <div>{movie.original_title}</div>    
            </Link>            
          </li>
    }
