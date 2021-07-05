import React, {useEffect, useState} from 'react'
import { get } from "../utils/httpClient";
import { MovieCard } from './MovieCard'
import { Spinner } from './Spinner'
import './MoviesGrid.css'
import {useQuery} from '../hooks/useQuery'


export const MoviesGrid = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // const location = useLocation()

  const query = useQuery()
  const  search = query.get("search")

  useEffect(() => {
    setIsLoading(true)
    const searchUrl = search ? '/search/movie?query=' + search : "/discover/movie"
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false)
    });
  }, [search]);

     if(isLoading) {
       return <Spinner />
     }

    return (
            <ul className="movieGrid">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}   
           </ul>
    )
}
