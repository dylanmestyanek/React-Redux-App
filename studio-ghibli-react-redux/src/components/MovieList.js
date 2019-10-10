import React from "react"
import { connect } from "react-redux"

const MovieList = ({ movies }) => {
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

export default connect(mapStateToProps, {})(MovieList)