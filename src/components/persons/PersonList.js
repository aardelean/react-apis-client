import React from 'react';
import PropTypes from 'prop-types';
import {doLoadPerson} from '../actions';
import Person from './Person';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {List} from 'material-ui/List';

const propTypes = {
  list: PropTypes.array.isRequired,
  onLoadPerson: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  list: getPersons(state)
});
const mapDispatchToProps = dispatch => ({
  onLoadPerson: () => doLoadPerson(dispatch)
});

const getPersons = (state) => {
  return state.persons.list;
};

const PersonList = ({list = [],  onLoadPerson}) => {
  const personList = list.map((item, index) => {
    return (<Person key={index} firstName={item.firstName} lastName={item.lastName} href={item._links.self.href}/>)
  });
  return (
    <div>
      <p>Checkout all these persons</p>
      <List>
        {personList}
      </List>
      <RaisedButton onTouchTap={onLoadPerson} label="Load Personas" />
    </div>
  )
};
PersonList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
