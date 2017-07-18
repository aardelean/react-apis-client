import React from 'react';
import {Route} from 'react-router-dom';
import PersonList from './components/persons/PersonList';

export default () => (
    <div>
      <Route path="/persons" component={PersonList} />
    </div>
  );
