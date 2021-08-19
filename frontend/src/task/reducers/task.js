import * as actionTypes from "../actions/types";
const initialState = {
  tasks: [],
};
export const task = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.RETRIEVE_SUCCESS:
      return {
        ...state,
        tasks: payload,
      };
    case actionTypes.CREATED_SUCCESS:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
