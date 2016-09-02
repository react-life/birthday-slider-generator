import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Profile from './Profile';

test('should render normal without any props supplied', () => {
  const profile = shallow(<Profile />);

  expect(profile).to.have.length(1);
});
