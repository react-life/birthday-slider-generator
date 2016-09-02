import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import RecoveryPassword from './RecoveryPassword';

test('should render normal without any props supplied', () => {
  const recoveryPassword = shallow(<RecoveryPassword />);

  expect(recoveryPassword).to.have.length(1);
});
