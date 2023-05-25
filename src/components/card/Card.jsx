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
            <Link to={`/detail/${propsHome.id}`}>
                <img src={propsHome.poster} alt="Poster movie" />
            </Link>

        </div>
    );
}