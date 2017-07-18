import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

const Person = ({ firstName = '', lastName = '' }) => (
  <div>
    <ListItem
      primaryText={firstName + ' ' + lastName}
    />
  </div>);
Person.propTypes = propTypes;

export default Person;
