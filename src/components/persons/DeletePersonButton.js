import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const propTypes = {
  onDelete: PropTypes.func.isRequired,
};

const DeletePersonButton = ({ onDelete }) => (
  <div>
    <RaisedButton onClick={onDelete} label="Delete Me" />
  </div>
);

DeletePersonButton.propTypes = propTypes;
export default DeletePersonButton;
