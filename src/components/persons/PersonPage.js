import React from 'react';
import PersonList from './PersonList';
import AddPersonForm from './AddPersonForm';

const PersonPage = () => (
  <div >
    <div style={{ float: 'left' }}>
      <AddPersonForm />
    </div>
    <div style={{ float: 'right', width: '600px' }}>
      <PersonList />
    </div>
  </div>
);

export default PersonPage;
