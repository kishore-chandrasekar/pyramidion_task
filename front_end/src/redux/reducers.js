// src/redux/reducers.js
import { ADD_JSON_DATA } from './types';

const initialState = {
  jsonDataArray: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JSON_DATA:
      return {
        ...state,
        jsonDataArray: [...state.jsonDataArray, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
