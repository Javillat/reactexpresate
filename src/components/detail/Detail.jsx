import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getDetails, cleanData } from "../../redux/actions/actions";

export default function Detail() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log(id);
    const detail = useSelector((dataDetail) => dataDetail.detail);

    useEffect(() =>{
        dispatch(getDetails(id));
        return() => {
            dispatch(cleanData());
        };
    }, []);

    const backHandler = (event) => {
        event.preventDefault();
        history.push("/home");
    };

    return (
        (detail !== undefined) ? 
        (
            <div className="containerDetail">
                <span>
                    <button onClick={backHandler}>Ir atras</button>
                </span>
                <p>Detalle de pelicula...</p>
                <div className="detail">
                    detail
                </div>
            </div>
        ) : ("Loading...")
    );
};