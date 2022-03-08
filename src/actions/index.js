import { ADD_FETCHED_DATA, FETCH_LOADING, QUERY_RESULT } from "./types.js";
import axios from "axios";

const apiUrl = "https://api.publicapis.org/entries";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_LOADING,
      payload: true,
    });
    return axios
      .get(apiUrl)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch({
          type: ADD_FETCHED_DATA,
          payload: data,
        });
        dispatch({
          type: FETCH_LOADING,
          payload: false,
        });
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const queryResultData = (query, elements) => {
  return (dispatch) => {
    const filteredArray = elements.filter((element) => {
      return element.API.includes(query) || element.Description.includes(query);
    });

    dispatch({
      type: QUERY_RESULT,
      payload: filteredArray,
    });
  };
};
