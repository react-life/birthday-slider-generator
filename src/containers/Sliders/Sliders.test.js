import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Sliders from './Sliders';

test('should render normal without any props supplied', () => {
  const sliders = shallow(<Sliders />);

  expect(sliders).to.have.length(1);
});
