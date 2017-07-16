import React, {PropTypes} from 'react';
import Divider from 'material-ui/Divider';
import {ListItem} from 'material-ui/List';

const propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

const Person = ({key='', firstName = '', lastName = '', href = ''}: any) => {
  return (<div>
    <ListItem key={href}
        primaryText={firstName + ' ' + lastName}
      />
  </div>)
};
Person.propTypes = propTypes;

export default Person;
