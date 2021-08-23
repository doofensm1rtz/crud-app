import urlsReducer from "./urls";
import { combineReducers } from "redux";

const reducers = combineReducers({ urls: urlsReducer });

export default reducers;
