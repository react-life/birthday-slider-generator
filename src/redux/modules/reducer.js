import { combineReducers } from 'redux-loop';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { reducer as form } from 'redux-form';

import settings from './settings';

const reducers = combineReducers({
  settings,
});

export default reducers;
