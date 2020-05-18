import {
  SELECTED_FILE
} from '../actions/types';

const initialState = {
  title: 'overview',
};

export default function (state = initialState, action) {
  switch (action.type) {

    case SELECTED_FILE:
      return {
        ...state,
        title: action.payload
      }
    
    default:
      return state;
  }
}