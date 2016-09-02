import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Icon from './Icon';

test('should render normal without any props supplied', () => {
  const icon = shallow(<Icon />);

  expect(icon).to.have.length(1);
});

test('should render normal without any props supplied', () => {
  const icon = shallow(<Icon icon='arrow' />);

  expect(icon).to.have.length(1);
});
