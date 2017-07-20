import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import { doDeletePerson } from './persons-actions';
import DeletePersonButton from './DeletePersonButton';

const propTypes = {
  person: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleDelete: id => dispatch(doDeletePerson(id)),
});

const Person = ({ person = {}, handleDelete }) => (
  <div>
    <div style={{ margin: '10px' }}>
      <ListItem >
        <label>{person.firstName + ' ' + person.lastName}</label>
        <DeletePersonButton onDelete={() => handleDelete(person._links.self.href)} />
      </ListItem>
    </div>
  </div>);
Person.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Person);
