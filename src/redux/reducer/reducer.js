import { GET_MOVIES, GET_DETAIL } from "../actions/actions";

const initialState = {
    movies: [],
    detail:[],
};

function Reducer(state = initialState, action){
    switch(action.type){
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };
        default:
            return { ...state};
    };
}

export default Reducer;
