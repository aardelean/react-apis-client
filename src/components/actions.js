import client from 'axios';
import * as actionTypes from './actionTypes';

const PERSON_API = '/api/persons';


export const loadPersonsSuccessfully = ({data, headers}) => ({
    type: actionTypes.LOAD_PERSONS_SUCCESSFULLY,
    data: data._embedded.persons,
});

export const loadPersonsFailure = (error) => ({
  type: actionTypes.LOAD_PERSONS_FAILURE,
  error,
});

export function fetchPersons() {
  return client.get(PERSON_API);
}
