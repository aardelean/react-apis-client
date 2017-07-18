import client from 'axios';
import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';


const PERSON_API = '/api/persons';

export const loadPersons = createAction(actionTypes.PERSONS_LOAD);

export const loadPersonsSuccess = createAction(actionTypes.PERSONS_LOAD_SUCCESSFULLY,
  res => (res.data._embedded.persons));

export const loadPersonsFailure = createAction(actionTypes.PERSONS_LOAD_FAILURE, error => error);

export const fetchPersons = () => (client.get(PERSON_API));

export const doLoadPerson = (dispatch) => {
  dispatch(loadPersons());
  return fetchPersons()
    .then(res => dispatch(loadPersonsSuccess(res)))
    .catch(err => dispatch(loadPersonsFailure(err)));
};
