import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import User from './User';

test('should render normal without any props supplied', () => {
  const user = shallow(<User />);

  expect(user).to.have.length(1);
});
