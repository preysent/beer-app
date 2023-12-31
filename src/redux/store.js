import { applyMiddleware, createStore } from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";

export default createStore(reducers,applyMiddleware(thunk))