import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Login from './Login';

test('should render normal without any props supplied', () => {
  const login = shallow(<Login />);

  expect(login).to.have.length(1);
});
