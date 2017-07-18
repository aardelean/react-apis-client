import client from 'axios';
import { createAction, handleActions } from 'redux-actions';

//  actionTypes -> consts

const PERSONS_LOAD = 'PERSONS_LOAD';
const PERSONS_LOAD_SUCCESSFULLY = 'PERSONS_LOAD_SUCCESSFULLY';
const PERSONS_LOAD_FAILURE = 'PERSONS_LOAD_FAILURE';

// actions ->definition of actions, export only the necessary one preffixed by 'do'
//  to be used in react component

const PERSON_API = '/api/persons';

const loadPersons = createAction(PERSONS_LOAD);

const loadPersonsSuccess = createAction(PERSONS_LOAD_SUCCESSFULLY,
  res => (res.data._embedded.persons));

const loadPersonsFailure = createAction(PERSONS_LOAD_FAILURE, error => error);

const fetchPersons = () => (client.get(PERSON_API));

export const doLoadPerson = (dispatch) => {
  dispatch(loadPersons());
  return fetchPersons()
    .then(res => dispatch(loadPersonsSuccess(res)))
    .catch(err => dispatch(loadPersonsFailure(err)));
};

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
