import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import { doLoadPerson } from './persons-redux';
import Person from './Person';

const propTypes = {
  list: PropTypes.array.isRequired,
  onLoadPerson: PropTypes.func.isRequired,
};

const getPersons = state => (state.persons.list);

const mapStateToProps = state => ({
  list: getPersons(state),
});
const mapDispatchToProps = dispatch => ({
  onLoadPerson: () => doLoadPerson(dispatch),
});

const PersonList = ({ list = [], onLoadPerson }) => {
  const personList = list.map(item => (
    <Person
      key={item._links.self.href}
      firstName={item.firstName}
      lastName={item.lastName}
    />));
  return (
    <div>
      <p>Checkout all these persons</p>
      <List>
        {personList}
      </List>
      <RaisedButton onTouchTap={onLoadPerson} label="Load Personas" />
    </div>
  );
};
PersonList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
