import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import ChangePassword from './ChangePassword';

test('should render normal without any props supplied', () => {
  const changePassword = shallow(<ChangePassword />);

  expect(changePassword).to.have.length(1);
});
