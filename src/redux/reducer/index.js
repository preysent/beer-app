import { combineReducers } from "redux";
import modeReducer from "./modeReducer";
import beerReducer from "./beerReducer";


export default combineReducers({
    mode :modeReducer,
    beer :beerReducer
})