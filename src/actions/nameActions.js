import {
  EXAMPLE
} from './types';


export function example(input) {
  return dispatch => {
    dispatch({ type: EXAMPLE, payload: { input } });
  }
}
