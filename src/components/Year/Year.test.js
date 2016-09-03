import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Year from './Year';

test('should render normal without any props supplied', () => {
  const year = shallow(<Year />);

  expect(year).to.have.length(1);
});
