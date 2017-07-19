import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import DeletePersonButton from './DeletePersonButton';

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

const Person = ({ firstName = '', lastName = '', onDelete }) => (
  <div>
    <div>
      <ListItem >
        <label>{firstName + ' ' + lastName}</label>
        <DeletePersonButton onDelete={onDelete} />
      </ListItem>
    </div>
  </div>);
Person.propTypes = propTypes;

export default Person;
