import React from "react";
export default function Card(propsHome){
    return (
        <div className="card">
            <h3>
                {propsHome.title}
            </h3>
            <h4>
                {propsHome.year}
            </h4>
            <img src={propsHome.poster} alt="Poster movie" />

        </div>
    );
}