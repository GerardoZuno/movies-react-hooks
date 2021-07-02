import React from 'react'
import {MoviesGrid} from './MoviesGrid'
import './App.css'

export const App = () => {
    return (
        <div>
            <header>
            <h1 className="title">Movies</h1>
            </header>
            <main>
              <MoviesGrid /> 
            </main>
        </div>
    )
}
