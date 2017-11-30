import { ADD_ARTICLE } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_ARTICLE:
      console.log('Triggering in ARTICL REDUCER', action.payload);
      return [action.payload].concat(state);
    default:
      return state;
  }
}