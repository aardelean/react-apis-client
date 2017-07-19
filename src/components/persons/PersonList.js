import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import { doLoadPerson, doDeletePerson } from './persons-actions';
import Person from './Person';

const propTypes = {
  list: PropTypes.array.isRequired,
  onLoadPerson: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const getPersons = state => (state.persons.list);

const mapStateToProps = state => ({
  list: getPersons(state),
});
const mapDispatchToProps = dispatch => ({
  onLoadPerson: () => dispatch(doLoadPerson()),
  onDelete: id => event => dispatch(doDeletePerson(id)),
});

const PersonList = ({ list = [], onLoadPerson, onDelete }) => {
  const personList = list.map(item => (
    <Person
      key={item._links.self.href}
      firstName={item.firstName}
      lastName={item.lastName}
      onDelete={onDelete(item._links.self.href)}
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
