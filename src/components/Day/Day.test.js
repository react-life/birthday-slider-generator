import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Day from './Day';

test('should render normal without any props supplied', () => {
  const day = shallow(<Day />);

  expect(day).to.have.length(1);
});
