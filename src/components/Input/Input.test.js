import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Input from './Input';

test('should render normal without any props supplied', () => {
  const input = shallow(<Input />);

  expect(input).to.have.length(1);
});
