import * as actionTypes from './actionTypes';

const initialState = {
  loading: false,
  persons: []
};

export default function reducer(state: any = initialState, action: any = {}) {
  switch (action.type) {
    case actionTypes.LOAD_PERSONS:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOAD_PERSONS_SUCCESSFULLY:
      return {
        ...state,
        persons: action.data,
        loading: false,
      };
    case actionTypes.LOAD_PERSONS_FAILURE:
      return {
        ...state,
        message: action,
        loading: false,
      };

    default:
      return state;
  }
}
