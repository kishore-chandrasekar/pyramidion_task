import { ADD_JSON_DATA } from './types';

export const addJsonData = (jsonData) => {
  return {
    type: ADD_JSON_DATA,
    payload: jsonData,
  };
};