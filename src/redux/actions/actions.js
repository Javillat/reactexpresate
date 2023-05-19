import axios from "axios";
import { URL, apikey } from "../../config/config";

export const GET_MOVIES = "GET_MOVIES";

export function getMovies(nombre){
    return async (disppatch) => {
        const movies = await axios.get(`${URL}/?s=${nombre}&apikey=${apikey}&page=1`);
        disppatch({
            type: "GET_MOVIES",
            payload: movies.data.results,
        })
    }
}

//https://www.omdbapi.com/?s=rocky&page=1&apikey=4825d224