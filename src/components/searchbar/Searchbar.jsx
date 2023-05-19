import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../../redux/actions/actions";

export default function Searchbar(){
    const dispatch = useDispatch();
    const [movieValue, setMovieValue] = useState("");
    console.log(movieValue);

    function handleSubmit(event){
        event.preventDefault();
        dispatch(getMovies(movieValue));
    }
    return(
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
            <input
                className="search_input"
                type="text"
                placeholder="Buscar Movie..."
                value={movieValue}
          onChange={(eventclick) => setMovieValue(eventclick.target.value)}
        />
            <input className="buttons search_button" type="submit" value="Buscar Película"/>
            </form>
        </div>
    )

}