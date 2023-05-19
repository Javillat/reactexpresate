import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "../reducer/reducer";

export const store = createStore(
    Reducer,
    composeWithDevTools(applyMiddleware(thunk))
);