import { SELECTED_FILE } from './types';

export const selectFile = (title) => {
  return {
    type: SELECTED_FILE,
    payload: title
  }
}