import axios from "axios";
import { URL, apikey } from "../../config/config";

export const GET_MOVIES = "GET_MOVIES";
export const GET_DETAIL = "GET_DETAIL";

export function getMovies(nombre){
    return async (disppatch) => {
        const movies = await axios.get(`${URL}/?s=${nombre}&apikey=${apikey}&page=1`);
        console.log(movies);
        disppatch({
            type: "GET_MOVIES",
            payload: movies.data.Search,
        })
    }
}

export function getDetails(id) {
    return async (dispatch) => {
        const detail = await axios.get(`${URL}/?i=${id}&apikey=${apikey}`);
        console.log(detail);
        dispatch({
            type: "GET_DETAIL",
            payload: detail.data.Search,
        });
    };
};

export function cleanData(){
    return {
        type: "CLEAN_DATA",
    };
};

//https://www.omdbapi.com/?s=rocky&page=1&apikey=4825d224