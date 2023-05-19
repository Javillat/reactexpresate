import React from "react";
import Searchbar from "../searchbar/Searchbar.jsx";

export default function Nav(){
    return(
        <nav>
            <div className="container">
                <div className="search">
                    <Searchbar />
                </div>
            </div>
        </nav>
    )
}