import { QUERY_RESULT } from "../actions/types";

export default function queryResultReducer(state = {}, action) {
  switch (action.type) {
    case QUERY_RESULT:
      return {
        ...state,
        result: [...action.payload],
      };
    default:
      return state;
  }
}
