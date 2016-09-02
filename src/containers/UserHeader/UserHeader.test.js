import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import UserHeader from './UserHeader';

test('should render normal without any props supplied', () => {
  const userHeader = shallow(<UserHeader />);

  expect(userHeader).to.have.length(1);
});
