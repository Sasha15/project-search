import { ADD_FETCHED_DATA, FETCH_LOADING } from "../actions/types";

export default function fetchReducer(state = {}, action) {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      return {
        ...state,
        projects: [...action.payload.entries],
      };

    case FETCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
