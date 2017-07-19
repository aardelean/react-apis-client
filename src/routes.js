import React from 'react';
import { Route } from 'react-router-dom';
import PersonPage from './components/persons/PersonPage';

export default () => (
  <div>
    <Route path="/persons" component={PersonPage} />
  </div>
  );
