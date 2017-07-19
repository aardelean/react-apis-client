import client from 'axios';
import { handleActions } from 'redux-actions';

//  actionTypes -> consts

const PERSONS_LOAD = 'PERSONS_LOAD';
const PERSONS_LOAD_SUCCESS = 'PERSONS_LOAD_SUCCESS';
const PERSONS_LOAD_FAIL = 'PERSONS_LOAD_FAIL';
const PERSON_ADD = 'PERSON_ADD';
const PERSON_ADD_SUCCESS = 'PERSON_ADD_SUCCESS';
const PERSON_ADD_FAIL = 'PERSON_ADD_FAIL';
const PERSON_DELETE = 'PERSON_DELETE';
const PERSON_DELETE_SUCCESS = 'PERSON_DELETE_SUCCESS';
const PERSON_DELETE_FAIL = 'PERSON_DELETE_FAIL';

// actions ->definition of actions, export only the necessary one preffixed by 'do'
//  to be used in react component

const PERSON_API = '/api/persons';

export function doLoadPerson() {
  return {
    types: [
      PERSONS_LOAD,
      PERSONS_LOAD_SUCCESS,
      PERSONS_LOAD_FAIL,
    ],
    promise: () => (client.get(PERSON_API)),
  };
}

export function doAddPerson(values) {
  return {
    types: [
      PERSON_ADD,
      PERSON_ADD_SUCCESS,
      PERSON_ADD_FAIL,
    ],
    promise: async () => {
      await client.post(PERSON_API, values);
      return client.get(PERSON_API);
    },
  };
}

export function doDeletePerson(href) {
  return {
    types: [
      PERSON_DELETE,
      PERSON_DELETE_SUCCESS,
      PERSON_DELETE_FAIL,
    ],
    promise: async () => {
      await client.delete(href);
      return client.get(PERSON_API);
    },
  };
}

//  reducer -> reducer part
const initialState = {
  loading: false,
  list: [],
};

export const reducer = handleActions({
  PERSONS_LOAD: state => ({
    ...state,
    loading: true,
  }),
  PERSONS_LOAD_FAIL: (state, action) => ({
    ...state,
    loading: false,
    message: action.error,
  }),
  PERSONS_LOAD_SUCCESS: (state, action) => {
    return {
      ...state,
      loading: false,
      list: action.result.data._embedded.persons,
    };
  },
  PERSON_ADD: state => ({
    ...state,
    loading: true,
  }),
  PERSONS_ADD_FAIL: (state, action) => ({
    ...state,
    loading: false,
    message: action.error,
  }),
  PERSON_ADD_SUCCESS: (state, action) => {
    return {
      ...state,
      loading: false,
      list: action.result.data._embedded.persons,
    };
  },
  PERSON_DELETE: state => ({
    ...state,
    loading: true,
  }),
  PERSON_DELETE_FAIL: (state, action) => ({
    ...state,
    loading: false,
    message: action.error,
  }),
  PERSON_DELETE_SUCCESS: (state, action) => {
    return {
      ...state,
      loading: false,
      list: action.result.data._embedded.persons,
    };
  },
}, initialState);
