import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from 'containers/App';

import Login from 'containers/Login';
import RecoveryPassword from 'containers/RecoveryPassword';
import Signup from 'containers/Signup';

import Layout from 'containers/Layout';

import User from 'containers/User';
import Institution from 'containers/Institution';
import Staff from 'containers/Staff';
import Roles from 'containers/Roles';
import Devices from 'containers/Devices';
import Journal from 'containers/Journal';
import Profile from 'containers/Profile';
import ChangePassword from 'containers/ChangePassword';


import NotFound from 'containers/NotFound';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Login} />

    <Route>
      <Route path='/login' component={Login}>
        <Route path='recovery' component={RecoveryPassword} />
      </Route>
      <Route path='/signup' component={Signup} />
    </Route>

    <Route component={Layout}>
      <Route path='/user' component={User}>
        <Route path='institution' component={Institution} />
        <Route path='staff' component={Staff} />
        <Route path='roles' component={Roles} />
        <Route path='devices' component={Devices} />
        <Route path='journal' component={Journal} />
        <Route path='profile' component={Profile}>
          <Route path='change-password' component={ChangePassword} />
        </Route>
      </Route>
    </Route>

    <Route path='*' component={NotFound} status={404} />
  </Route>
);
