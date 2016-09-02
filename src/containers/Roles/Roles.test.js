import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Roles from './Roles';

test('should render normal without any props supplied', () => {
  const roles = shallow(<Roles />);

  expect(roles).to.have.length(1);
});
