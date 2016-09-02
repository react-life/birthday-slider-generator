import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Staff from './Staff';

test('should render normal without any props supplied', () => {
  const staff = shallow(<Staff />);

  expect(staff).to.have.length(1);
});
