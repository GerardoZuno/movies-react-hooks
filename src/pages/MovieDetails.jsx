import React, {useEffect, useState} from 'react'
import movie from './movie.json'
import styles from './MovieDetails.Module.css'
import { get } from '../utils/httpClient'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {  
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null);


    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
          setMovie(data);
        });
      }, [movieId]);
    
      if (!movie) {
        return null;
      }

    const imgUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;           
    return (
        <div className={styles.detailsContainer}>
          <img className={styles.col + " " + styles.movieImage} src={imgUrl} alt={movie.title}/>
          <div className={styles.col + " " + styles.movieDetails}>
              <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
              <p>
               <strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(", ")}    
              </p>
              <p><strong>Description:</strong> {movie.overview}</p>

          </div>
        </div>
    )
}
