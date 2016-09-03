import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Birthday from './Birthday';

test('should render normal without any props supplied', () => {
  const birthday = shallow(<Birthday />);

  expect(birthday).to.have.length(1);
});
