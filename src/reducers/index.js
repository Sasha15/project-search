import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import queryResultReducer from "./queryResultReducer";

export default combineReducers({
  data: fetchReducer,
  result: queryResultReducer,
});
