import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Devices from './Devices';

test('should render normal without any props supplied', () => {
  const devices = shallow(<Devices />);

  expect(devices).to.have.length(1);
});
