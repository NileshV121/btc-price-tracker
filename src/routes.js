import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './container/landing';


const Routes = () => (
  <Router>
    <Route path="*" component={Landing} />
  </Router>
);


export default Routes;
