import React, {PropTypes} from 'react';
import {fetchPersons, loadPersonsSuccessfully, loadPersonsFailure} from '../actions';
import * as actionTypes from '../actionTypes';
import Person from './Person';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';

const propTypes = {
  persons: PropTypes.array.isRequired,
  triggerLoadPerson: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  persons: state.persons.persons
});
const mapDispatchToProps = dispatch => ({
  triggerLoadPerson: () => {
    dispatch({type: actionTypes.LOAD_PERSONS});
    return fetchPersons()
    .then(res => dispatch(loadPersonsSuccessfully(res)))
    .catch(err => dispatch(loadPersonsFailure(err)));
  }
});

const PersonList = ({persons = [],  triggerLoadPerson}) => {
  const personList = persons.map((item, index) => {
    return (<Person key={index} firstName={item.firstName} lastName={item.lastName} href={item._links.self.href}/>)
  });
  return (
    <div>
      <p>Checkout all these persons</p>
      <List>
        {personList}
      </List>
      <RaisedButton onTouchTap={triggerLoadPerson} label="Load Personas" />
    </div>
  )
};
PersonList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
