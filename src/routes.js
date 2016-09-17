import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'containers/App';

import Login from 'containers/Login';
import Slide from 'containers/Slide';

import NotFound from 'containers/NotFound';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Login} />
    <Route path='slide' component={Slide} />
    <Route path='*' component={NotFound} status={404} />
  </Route>
);
