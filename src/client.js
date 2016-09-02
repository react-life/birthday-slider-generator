import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import createStore from './redux/create';
import routes from './routes';

const history = useScroll(() => browserHistory)();
const dest = document.getElementById('content');
const store = createStore(history);

ReactDOM.render(
  <Provider store={store} key='provider'>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  dest
);
