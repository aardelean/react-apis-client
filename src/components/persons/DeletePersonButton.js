import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

const propTypes = {
  onDelete: PropTypes.func.isRequired,
};

const DeletePersonButton = ({ onDelete }) => (
  <div style={{ float: 'right' }}>
    <FlatButton onClick={onDelete} label="Delete Me" />
  </div>
);

DeletePersonButton.propTypes = propTypes;
export default DeletePersonButton;
