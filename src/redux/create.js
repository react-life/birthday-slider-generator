import { createStore, compose } from 'redux';
import { install } from 'redux-loop';
import reducer from './modules/reducer';

export default function create(history, data) {
  const finalCreateStore = compose(
    install(),
    window.devToolsExtension && __DEVELOPMENT__ ? window.devToolsExtension() : fn => fn,
  )(createStore);
  const store = finalCreateStore(reducer, data);

  return store;
}
