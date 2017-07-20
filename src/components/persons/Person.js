import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import DeletePersonButton from './DeletePersonButton';

const propTypes = {
  person: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const Person = ({ person = {}, onDelete }) => (
  <div>
    <div style={{ margin: '10px' }}>
      <ListItem >
        <label>{person.firstName + ' ' + person.lastName}</label>
        <DeletePersonButton onDelete={onDelete} />
      </ListItem>
    </div>
  </div>);
Person.propTypes = propTypes;

export default Person;
