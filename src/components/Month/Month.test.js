import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Month from './Month';

test('should render normal without any props supplied', () => {
  const month = shallow(<Month />);

  expect(month).to.have.length(1);
});
