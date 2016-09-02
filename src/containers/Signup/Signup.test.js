import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Signup from './Signup';

test('should render normal without any props supplied', () => {
  const signup = shallow(<Signup />);

  expect(signup).to.have.length(1);
});
