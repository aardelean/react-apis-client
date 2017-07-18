import * as actionTypes from './actionTypes';
import { handleActions } from 'redux-actions';

const initialState = {
  loading: false,
  list: []
};

export const PERSONS_LOAD = 'PERSONS_LOAD';
export const PERSONS_LOAD_SUCCESSFULLY = 'PERSONS_LOAD_SUCCESSFULLY';
export const PERSONS_LOAD_FAILURE = 'PERSONS_LOAD_FAILURE';

const reducer = handleActions({
  PERSONS_LOAD: (state, action) => ({
    ...state,
    loading: true,
  }),
  PERSONS_LOAD_FAILURE: (state, action) => ({
    ...state,
    loading: false,
    message: action.payload,
  }),
  PERSONS_LOAD_SUCCESSFULLY: (state, action) => ({
    ...state,
    loading: false,
    list: action.payload,
  }),
}, initialState);

export default reducer;
