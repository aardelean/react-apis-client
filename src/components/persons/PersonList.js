import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { List } from 'material-ui/List';
import { doLoadPerson } from './persons-actions';
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
  onLoadPerson: () => dispatch(doLoadPerson()),
});

const PersonList = ({ list = [], onLoadPerson }) => {
  const personList = list.map(item => (
    <Person
      key={item._links.self.href}
      person={item}
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
