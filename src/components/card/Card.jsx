import React from "react";
import { Link } from "react-router-dom";

export default function Card(propsHome){
    return (
        <div className="card">
            <h3>
                {propsHome.title}
            </h3>
            <h4>
                {propsHome.year}
            </h4>
            <link to={`/detail/${propsHome.imdbID}`}>
                <img src={propsHome.poster} alt="Poster movie" />
            </link>

        </div>
    );
}