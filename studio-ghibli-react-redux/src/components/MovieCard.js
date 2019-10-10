import React from "react"

const MovieCard = ({ movie }) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Year released: {movie.release_date}</p>
            <p>{movie.description}</p>
            <p>Directed By: {movie.director}</p>
            <p>Produced By: {movie.producer}</p>
        </div>
    )
}

export default MovieCard