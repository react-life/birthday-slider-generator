import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';

test('should render normal without any props supplied', () => {
  const app = shallow(<App />);

  expect(app).to.have.length(1);
});
