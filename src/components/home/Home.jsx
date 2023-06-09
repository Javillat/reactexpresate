import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../redux/actions/actions";

import Nav from "../nav/Nav";
import Card from "../card/Card";

export default function Home(){
    const dispatch = useDispatch();
    const movies = useSelector((data) => data.movies);
    console.log(movies);
    // const [movieEncontrada, setMovieEncontrada] = useState([]);
//    console.log(movieEncontrada);
    // useEffect(() => {
    //     dispatch(getMovies());
    // },[dispatch]);
    return (
        <div className="container">
            <h1>Home Movies</h1>
            <div className="container_nav">
                <Nav />
            </div>
            {movies > 0 || movies !== undefined ? (
                movies.map((movie) => (
                    <div key={movie.imdbID}>
                        <Card 
                            id={movie.imdbID}
                            title={movie.Title} 
                            year={movie.Year}
                            poster={movie.Poster} 
                        />
                    </div>
                ))
            ):("Cargando...")

            }
        </div>
    );
}

