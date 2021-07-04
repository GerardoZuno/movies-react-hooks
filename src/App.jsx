import React from 'react'
import './App.css'
import {MovieDetails} from './pages/MovieDetails'
import { LandingPage } from './pages/LandingPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export const App = () => {
    return (
        <Router>
            <header>
            <Link to="/"><h1 className="title">Movies</h1></Link> 
           

            </header>
            <main>
            <Switch>
             <Route exact path="/movies/:movieId"><MovieDetails/></Route>
             <Route path="/"><LandingPage/></Route>
           </Switch>
            </main>
        </Router>
    )
}
