import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchMovies } from "../actions"

const MovieList = ({ movies, fetchMovies }) => {

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies])

    return (
        <div>Movie List
            <p>{JSON.stringify(movies)}</p>
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