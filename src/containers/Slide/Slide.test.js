import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Slide from './Slide';

test('should render normal without any props supplied', () => {
  const slide = shallow(<Slide />);

  expect(slide).to.have.length(1);
});
