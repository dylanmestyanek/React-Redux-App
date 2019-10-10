import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchMovies } from "../actions"
import MovieCard from "./MovieCard"

const MovieList = ({ movies, fetchMovies }) => {

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies])

    return (
        <div>
            {
                movies.map(movie => {
                   return <MovieCard key={movie.id} movie={movie} />
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    console.log("This is state from MovieList.js", state)
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList)