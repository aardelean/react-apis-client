import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

const PersonForm = (props) => {
  const { handleSubmit } = props;
  return (<Form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" component="input" type="text" />
    </div>
    <RaisedButton type="submit">Submit</RaisedButton>
  </Form>);
};

export default reduxForm({ form: 'person',
  fields: ['firstName', 'lastName'],
})(PersonForm);
