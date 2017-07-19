import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PersonForm from './PersonForm';
import { doAddPerson } from './persons-actions';

const propTypes = {
  submit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state,
});
const mapDispatchToProps = dispatch => ({
  submit: values => dispatch(doAddPerson(values)),
});
const AddPersonForm = ({ submit }) => (
  <div>
    <PersonForm onSubmit={submit} />
  </div>
);
AddPersonForm.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonForm);
